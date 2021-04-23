#!/usr/bin/env node

const fs = require('fs');

fs.promises
    .writeFile('target.txt', 'hello world', (err) => {
        if (err) {
            throw err;
        }
    })
    .then(() => console.log('File saved'))
    .catch((err) => console.log(err));
