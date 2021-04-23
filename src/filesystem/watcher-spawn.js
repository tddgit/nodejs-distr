#!/usr/bin/env node

const fs = require('fs');
const spawn = require('child_process').spawn;

const filename = process.argv[2];
if (!filename) {
    throw new Error('A filename must be specified');
}

fs.watch(filename, () => {
    const ls = spawn('ls', ['-l', '-h', filename]);
    ls.stdout.pipe(process.stdout);
});

console.log(`Now watching ${filename} for changes...`);
