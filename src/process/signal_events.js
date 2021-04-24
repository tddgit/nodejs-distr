process.stdin.resume();

process.on('SIGHUP', () => {
    console.log('Received SIGHUP. Press CTRL+D to exit');
});

function handle(signal) {
    console.log(`Received ${signal}`);
}

process.on('SIGINT', handle);
process.on('SIGTERM', handle);
