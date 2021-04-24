process.on('multiplyResolves', (type, promise, reason) => {
    console.error(type, promise, reason);

    // eslint-disable-next-line no-process-exit
    setImmediate(() => process.exit(1));
});

async function main() {
    try {
        return await new Promise((resolve, reject) => {
            resolve('First call');
            resolve('Swallowed resolve');
            reject(new Error('Swallowed reject'));
        });
    } catch {
        throw new Error('Failed');
    }
}

main().then(console.log);
