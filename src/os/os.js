const os = require('os');

// console.log('-> os', os);
console.log('-> os.EOL', os.EOL);
console.log('-> os.arch(', os.arch());
console.log('-> os.constants', os.constants);
console.log('-> os.cpus()', os.cpus());
console.log('-> os.freemem()', os.freemem());
console.log('-> os.getPriority(process.pid)', os.getPriority(process.pid));
console.log('-> os.homedir()', os.homedir());
console.log('-> os.hostname()', os.hostname());
console.log('-> os.networkInterfaces()', os.networkInterfaces());
console.log('-> os.platform()', os.platform());
console.log('-> os.release()', os.release());
console.log('-> os.tmpdir()', os.tmpdir());
console.log('-> os.totalmem()', os.totalmem() / 1_024 / 1_024 / 1_024);
console.log('-> os.type()', os.type());
console.log('-> os.uptime()', os.uptime());
console.log('-> os.userInfo()', os.userInfo());
console.log('-> os.version()', os.version());
console.log(
    '-> os.setPriority(process.pid, 0)',
    os.setPriority(process.pid, 0),
);
console.log('-> os.getPriority(process.pid)', os.getPriority(process.pid));
