console.log(process.env);

process.env.foo = 'bar';
console.log(process.env.foo);

process.env.TEST = 1;
delete process.env.TEST;

console.log(process.execArgv);
console.log(process.execPath);

if (process.gategid) {
    console.log(`Current gid: ${process.gategid()}`);
}

if (process.getuid) {
    console.log(`Current uid: ${process.getuid()}`);
}

if (process.getgid) {
    console.log(`Current gid: ${process.getgid()}`);
}

process.exitCode = 1;
