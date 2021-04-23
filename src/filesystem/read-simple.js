#!/usr/bin/env node

const fs = require('fs');

fs.promises
    .readFile('target.txt', (err, data) => {
        if (err) {
            throw err;
        }
    })
    .then((data) => console.log(data.toString()))
    .catch((err) => console.log(err));
