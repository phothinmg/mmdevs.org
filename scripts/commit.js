#!/usr/bin/env node
import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { execSync } from 'node:child_process';

const rl = readline.createInterface({ input, output });

const options = ['Register', 'Update', 'Remove'];
console.log('Select a number for commit type:');
options.forEach((opt, idx) => {
    console.log(`${idx + 1}) ${opt}`);
});

let TYPE;
while (true) {
    const answer = await rl.question('Enter number: ');
    const idx = parseInt(answer, 10) - 1;
    if (idx >= 0 && idx < options.length) {
        TYPE = options[idx];
        break;
    } else {
        console.log('Invalid selection. Try again.');
    }
}

const message = await rl.question('Enter commit message: ');
rl.close();

const commit_message = `${TYPE} : ${message}.mmdevs.org`;

const current_branch = execSync('git branch --show-current', { encoding: 'utf8' }).trim();
execSync('git add .', { stdio: 'inherit' });
execSync(`git commit -m "${commit_message}"`, { stdio: 'inherit' });
execSync(`git push origin "${current_branch}"`, { stdio: 'inherit' });

console.log(`Push ${current_branch} with ${commit_message}`);
