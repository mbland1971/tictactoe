const fs = require('fs');
const path = require('path');
const { HtmlValidate, formatterFactory } = require('html-validate');

const root = path.resolve(__dirname, '..');
const htmlFiles = fs.readdirSync(root).filter((file) => file.endsWith('.html'));

if (htmlFiles.length === 0) {
  console.error('No HTML files found to validate.');
  process.exit(1);
}

const htmlvalidate = new HtmlValidate();
const reports = htmlFiles.map((file) => htmlvalidate.validateFileSync(path.join(root, file)));
const formatter = formatterFactory('stylish');
const output = formatter(reports.flatMap((report) => report.results));

if (output) {
  console.log(output);
}

const errorCount = reports.reduce((sum, report) => sum + report.errorCount, 0);
const warningCount = reports.reduce((sum, report) => sum + report.warningCount, 0);

const indexPath = path.join(root, 'index.html');
const expectedGameFiles = [
  'tic-tac-toe.html',
  'centipede.html',
  'asteroids.html',
  'space-invaders.html',
  'frogger.html',
  'tank.html',
  'defender.html',
  'missile-command.html'
];
const localStorageKeyMap = {
  'asteroids.html': 'asteroids_hi',
  'centipede.html': 'centipede_hi',
  'space-invaders.html': 'sinvaders_hi',
  'frogger.html': 'frogger_hi',
  'tank.html': 'tank_hi',
  'defender.html': 'defender_hi',
  'missile-command.html': 'missile_hi'
};

function findGameLinks(htmlText) {
  const hrefRegex = /<a[^>]+href=(['"])([^'\"]+\.html)\1/gi;
  const links = [];
  let match;
  while ((match = hrefRegex.exec(htmlText)) !== null) {
    links.push(match[2]);
  }
  return links;
}

function checkIndexLinks() {
  const indexText = fs.readFileSync(indexPath, 'utf8');
  const links = findGameLinks(indexText).filter((href) => href !== 'index.html');
  const missing = expectedGameFiles.filter((file) => !links.includes(file));
  const extra = links.filter((href) => !expectedGameFiles.includes(href));
  const issues = [];

  if (links.length !== expectedGameFiles.length) {
    issues.push(
      `Expected ${expectedGameFiles.length} game links in index.html, but found ${links.length}.`
    );
  }
  if (missing.length > 0) {
    issues.push(`Missing game links in index.html: ${missing.join(', ')}.`);
  }
  if (extra.length > 0) {
    issues.push(`Unexpected HTML targets in index.html: ${extra.join(', ')}.`);
  }
  return issues;
}

function checkLocalStorageKeys() {
  const issues = [];
  for (const [file, expectedKey] of Object.entries(localStorageKeyMap)) {
    const filePath = path.join(root, file);
    if (!fs.existsSync(filePath)) {
      issues.push(`Expected game file not found: ${file}`);
      continue;
    }

    const text = fs.readFileSync(filePath, 'utf8');
    if (!text.includes(`localStorage.getItem('${expectedKey}')`) && !text.includes(`localStorage.getItem("${expectedKey}")`)) {
      issues.push(`Missing localStorage read for key '${expectedKey}' in ${file}.`);
    }
    if (!text.includes(`localStorage.setItem('${expectedKey}'`) && !text.includes(`localStorage.setItem("${expectedKey}"`)) {
      issues.push(`Missing localStorage write for key '${expectedKey}' in ${file}.`);
    }
  }
  return issues;
}

// The launcher reads each game's high score from a data-hikey attribute. If that
// drifts from the key the game itself writes, the card silently shows 0 forever.
function checkLauncherHiKeys() {
  const indexText = fs.readFileSync(indexPath, 'utf8');
  const found = [...indexText.matchAll(/data-hikey=(['"])([^'"]+)\1/gi)].map((m) => m[2]);
  const expected = Object.values(localStorageKeyMap);
  const issues = [];

  const unknown = found.filter((key) => !expected.includes(key));
  if (unknown.length > 0) {
    issues.push(`index.html reads unknown localStorage key(s): ${unknown.join(', ')}.`);
  }
  const unread = expected.filter((key) => !found.includes(key));
  if (unread.length > 0) {
    issues.push(`index.html never reads high-score key(s): ${unread.join(', ')}.`);
  }
  return issues;
}

// Every page ships a Content-Security-Policy. These are self-contained files with
// no external resources, so the policy must stay restrictive.
function checkContentSecurityPolicy() {
  const issues = [];
  for (const file of htmlFiles) {
    const text = fs.readFileSync(path.join(root, file), 'utf8');
    // The policy value itself contains single quotes ('none'), so match on the
    // double-quoted attribute rather than a generic quoted-value pattern.
    const match = text.match(/<meta\s+http-equiv="Content-Security-Policy"\s+content="([^"]+)"/i);
    if (!match) {
      issues.push(`Missing Content-Security-Policy meta tag in ${file}.`);
      continue;
    }
    const policy = match[1];
    for (const directive of ["default-src 'none'", "base-uri 'none'", "form-action 'none'"]) {
      if (!policy.includes(directive)) {
        issues.push(`CSP in ${file} is missing "${directive}".`);
      }
    }
    if (/script-src[^;]*(https?:|\*)/i.test(policy)) {
      issues.push(`CSP in ${file} allows remote scripts.`);
    }
  }
  return issues;
}

// High scores come from user-writable storage, so every game must validate what it
// reads and tolerate storage being unavailable rather than failing to start.
function checkStorageHardening() {
  const issues = [];
  for (const file of Object.keys(localStorageKeyMap)) {
    const text = fs.readFileSync(path.join(root, file), 'utf8');
    if (!text.includes('Number.isFinite')) {
      issues.push(`${file} does not validate the stored high score before using it.`);
    }
    const reads = [...text.matchAll(/localStorage\.(getItem|setItem)/g)].length;
    const guards = [...text.matchAll(/try\s*\{/g)].length;
    if (guards < reads) {
      issues.push(`${file} has ${reads} localStorage access(es) but only ${guards} try/catch guard(s).`);
    }
  }
  return issues;
}

function verifyGameFilesExist() {
  return expectedGameFiles.filter((file) => !fs.existsSync(path.join(root, file)));
}

const repoIssues = [];
repoIssues.push(...checkIndexLinks());
repoIssues.push(...checkLocalStorageKeys());
repoIssues.push(...checkLauncherHiKeys());
repoIssues.push(...checkContentSecurityPolicy());
repoIssues.push(...checkStorageHardening());
repoIssues.push(...verifyGameFilesExist().map((file) => `Missing expected game file: ${file}`));

if (repoIssues.length > 0) {
  console.log('Repository verification issues:');
  repoIssues.forEach((issue) => console.log(`- ${issue}`));
}

console.log(`Validated ${htmlFiles.length} HTML file(s). ${errorCount} error(s), ${warningCount} warning(s).`);

if (errorCount > 0 || repoIssues.length > 0) {
  process.exit(1);
}
