const util = require('util');

const fs = require('fs');

// console.log(
//     '-> fs.stat()',
//     fs.stat('/Users/mac/_monorepo/packages/nodejs-distr/src/path/path.js'),
// );

const stat = util.promisify(fs.stat);

stat('.')
    .then((stats) => {
        console.log('-> stats', stats);
    })
    .catch((error) => {
        console.log('-> error', error);
    });
