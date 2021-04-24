const unhandledRejections = new Map();

process.on('unhandledRejection', (reason, promise) => {
    unhandledRejections.set(promise, reason);
});

process.on('rejectionHandled', (promise) => {
    unhandledRejections.delete(promise);
});
