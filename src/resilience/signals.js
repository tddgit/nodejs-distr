#!/usr/bin/env node

console.log(`Process ID: ${process.pid}`);

process.on('SIGHUP', () => console.log('Received: SIGHUP'));
process.on('SIGHINT', () => console.log('Received: SIGHINT'));

setTimeout(() => {}, 5 * 60 * 1000);

const accounts = new Map();

module.exports.set = (account_id, account) => {
    accounts.set(account_id, account);
};

// process.namespace = {};
//
// function createNamespace(name) {
//     process.namespaces[name] = namespace;
// }
