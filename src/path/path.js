const path = require('path');

path.basename('/Users/mac/_monorepo/packages/nodejs-distr/src/path/path.js');
console.log(
    "-> path.basename('/Users/mac/_monorepo/packages/nodejs-distr/src/path/path.js')",
    path.basename(
        '/Users/mac/_monorepo/packages/nodejs-distr/src/path/path.js',
    ),
);
console.log('-> process.env.PATH', process.env.PATH);
console.log(
    '-> process.env.PATH.split(path.delimiter)',
    process.env.PATH.split(path.delimiter),
);
console.log('-> path.delimiter', path.delimiter);
console.log(
    "-> path.extname('/Users/mac/_monorepo/packages/nodejs-distr/src/path/path.js')",
    path.extname('/Users/mac/_monorepo/packages/nodejs-distr/src/path/path.js'),
);
