#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const ROOT = path.resolve(__dirname, '..');
const FOLDERS = ['leet-code', 'beecrowd'];

function slugify(name) {
  return name
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function parseArgs() {
  const args = process.argv.slice(2);
  const result = { folder: null, number: null, name: null };
  const positionals = [];

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--folder' || args[i] === '-f') {
      result.folder = args[++i];
    } else if (args[i] === '--number' || args[i] === '-n') {
      result.number = args[++i];
    } else if (args[i] === '--name' || args[i] === '-N') {
      result.name = args[++i];
    } else if (args[i] === '--') {
      // skip npm's separator
    } else {
      positionals.push(args[i]);
    }
  }

  // Positionals: first = number, rest = name (so name can contain spaces)
  if (positionals.length >= 2 && !result.number && !result.name) {
    result.number = positionals[0];
    result.name = positionals.slice(1).join(' ');
  } else if (positionals.length >= 1 && !result.number) {
    result.number = positionals[0];
  } else if (positionals.length >= 1 && !result.name) {
    result.name = positionals.join(' ');
  }

  return result;
}

function ask(rl, question, defaultValue = '') {
  const suffix = defaultValue ? ` (${defaultValue})` : '';
  return new Promise((resolve) => {
    rl.question(`${question}${suffix}: `, (answer) => {
      resolve(typeof answer === 'string' && answer.trim() !== '' ? answer.trim() : defaultValue);
    });
  });
}

function askFolder(rl) {
  return new Promise((resolve) => {
    const prompt = `Folder [${FOLDERS.join(' | ')}]: `;
    rl.question(prompt, (answer) => {
      const value = answer.trim().toLowerCase();
      if (FOLDERS.includes(value)) {
        resolve(value);
        return;
      }
      const byAlias = { leetcode: 'leet-code', leet: 'leet-code', beecrowd: 'beecrowd', bee: 'beecrowd' };
      resolve(byAlias[value] || FOLDERS[0]);
    });
  });
}

async function gatherInput(parsed) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

  const folder = parsed.folder || (await askFolder(rl));
  const number = parsed.number || (await ask(rl, 'Problem number'));
  const name = parsed.name || (await ask(rl, 'Problem name'));

  rl.close();

  if (!number || !name) {
    console.error('Error: problem number and name are required.');
    process.exit(1);
  }

  const slug = slugify(name);
  const folderName = `${number}-${slug}`;

  return { folder, number, name, slug, folderName };
}

function createProblemDir(targetFolder, folderName) {
  const problemPath = path.join(ROOT, targetFolder, folderName);
  const testPath = path.join(problemPath, '__tests__');

  if (fs.existsSync(problemPath)) {
    console.error(`Error: folder already exists: ${path.relative(ROOT, problemPath)}`);
    process.exit(1);
  }

  const isBeecrowd = targetFolder === 'beecrowd';
  fs.mkdirSync(problemPath, { recursive: true });
  if (!isBeecrowd) fs.mkdirSync(testPath, { recursive: true });

  const solutionContent = isBeecrowd
    ? `const lines = [];

// your code here
`
    : `/*
  <description>
*/

module.exports = function solution(input) {
  // your code here
  return input;
};
`;

  const testContent = `const solution = require('../solution');

const TEST_CASES = [
  { call: solution(/* input */), output: /* expected */ }
];

test("${folderName}", () => {
  TEST_CASES.forEach(({ call, output }) =>
    expect(call).toStrictEqual(output)
  );
});
`;

  fs.writeFileSync(path.join(problemPath, 'solution.js'), solutionContent, 'utf8');
  if (!isBeecrowd) fs.writeFileSync(path.join(testPath, 'solution.test.js'), testContent, 'utf8');

  return problemPath;
}

async function main() {
  const parsed = parseArgs();
  const { folder, folderName } = await gatherInput(parsed);

  const problemPath = createProblemDir(folder, folderName);
  console.log(`Created: ${path.relative(ROOT, problemPath)}`);
  console.log(`  - solution.js`);
  if (folder !== 'beecrowd') console.log(`  - __tests__/solution.test.js`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
