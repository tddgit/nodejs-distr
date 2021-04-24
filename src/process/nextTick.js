console.log('Start');

process.nextTick(function () {
    console.log('nextTick callback');
});

console.log('scheduled');

console.log(require.main);

console.log(process.pid);
console.log(process.platform);
