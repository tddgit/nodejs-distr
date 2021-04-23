#!/usr/bin/env node

const fs = require('fs');

const net = require('net');

const filename = process.argv[2];

if (!filename) {
    throw Error('Error: No filename specified.');
}

net.createServer((connection) => {
    console.log('Subscriber connected');

    connection.write(`Now watching "${filename}" for changes...\n`);

    const watcher = fs.watch(filename, () =>
        connection.write(`File changed: ${new Date().toISOString()}\n`),
    );

    connection.on('close', () => {
        console.log('Subscriber disconnected');
        watcher.close();
    });
}).listen(60_300, () =>
    console.log('Listening for subscribers on port 60_300'),
);
