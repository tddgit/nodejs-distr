const fs = require('fs');

process.on('uncaughtException', (err, origin) => {
    fs.writeSync(
        process.stderr.fd,
        `Caught exception: ${err}\n`,
        `Exception origin: ${origin}`,
    );
});

setTimeout(() => {
    console.log('This will still run.');
}, 500);

// noneexistentFunc();
console.log('This will not run');
