const os = require('os');
const path = require('path');

const module = { exports: {} };

process.dlopen(
    module,
    path.join(__dirname, 'local.node'),
    os.constants.dlopen.RTLD_NOW,
);

module.exports.foo();
