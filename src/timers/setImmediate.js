const util = require('util');

const setImmediatePromise = util.promisify(setImmediate);

setImmediatePromise('foobar').then((value) => {
    console.log('-> value', value);
});
