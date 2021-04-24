process.on('uncaughtRejection', (reason, promise) => {
    console.log('Unhandled rejection at: ', promise, 'reason:', reason);
});

// somePromise.then((res) => {
//     return reportToUser(JSON.parse(res))
//
// })

function SomeResource() {
    this.loaded = Promise.reject(new Error('Resource not yet loaded'));
}
