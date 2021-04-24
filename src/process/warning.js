const events = require('events');

events.defaultMaxListeners = 1;

process.on('foo', () => {});
process.on('foo', () => {});

process.on('warning', (warning) => {
    console.warn(warning.name);
    console.warn(warning.message);
    console.warn(warning.stack);
});
