const fs = require('fs');

const log = console.log;

fs.promises.readFile('/etc/passwd', (err, data) => {
    if (err) throw err;
    console.log(data);
});

setImmediate(() => {
    console.log('This runs while file is beeing readed');
});

setTimeout(() => console.log('A', 0));
log('B');
setImmediate(() => log('F -SetImmediate'));
setTimeout(() => console.log('C'), 101);
setTimeout(() => log('D'), 100);

let i = 0;
while (i < 1_000_000) {
    const ignore = Math.sqrt(i);
    i++;
}

log('E');

const t1 = setTimeout(() => {
    log('Timeout1');
}, 100);
const t2 = setTimeout(() => {
    log('Timeout2');
}, 101);

t1.unref();
clearTimeout(t2);

console.log(
    setTimeout(() => {
        log('Timeout1');
    }, 100),
);

setImmediate(() => log('1'));
log('2');
setTimeout(() => log('4'));
Promise.resolve().then(() => log('3'));
process.nextTick(() => log('5'));
fs.promises.readFile(__filename, () => {
    log('6');
    setTimeout(() => log('7'));
    setImmediate(() => log('8'));
    Promise.resolve().then(() => log('9'));
    process.nextTick(() => log('10'));
});

const sleep_st = (t) => new Promise((r) => setTimeout(r, t));
const sleep_im = () => new Promise((r) => setImmediate(r));

(async () => {
    setImmediate(() => log('1'));
    log('2');
    await sleep_st(0);
    setImmediate(() => log('3'));
    log('4');
    await sleep_im();
    setImmediate(() => log('5'));
    log('6');
    await 1;
    setImmediate(() => log('7'));
    log('8');
})();

const nt_recursive = () => process.nextTick(nt_recursive);
nt_recursive();

const si_recursive = () => setImmediate(si_recursive);
si_recursive();

setInterval(() => log('hi'), 10);

// function foo(count, callback) {
//     if (count <= 0) {
//         return process.nextTick(() => callback(new TypeError('count > 0')));
//
//     }
//     myAsyncOperation(count, callback);
// }
//
// let bar = false;
// foo(3, () => {
//     assert(bar);
// });
//
// bar = true;
