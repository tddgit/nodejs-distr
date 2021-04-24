import * as fsp from 'fs/promises';

import * as fs from 'fs';

import { unlink } from 'fs/promises';

import { unlinkSync } from 'fs';
import { log } from 'util';

process.on('uncaughtException', (err, origin) => {
    fs.writeSync(
        process.stderr.fd,
        `Caught exception: ${err}\n`,
        `Exception origin: ${origin}`,
    );
});

console.log('PROMISE');

try {
     unlink('/tmp/hello');
    console.log('PROMISE: Successfully deleted /tmp/hello');
} catch (error) {
    console.log('-> PROMISE error.message', error.message);
}

console.log('CALLBACK');

fs.unlink('/tmp/hello', (err) => {
    if (err) {
        console.log('->CALLBACK err', err);
    }
    console.log('CALLBACK : Successfully deleted /tmp/hello');
});

console.log('SYNC');

try {
    unlinkSync('/tmp/hello')
    console.log('SYNC Successfully deleted /tmp/hello');
} catch (error) {
    console.log('-> SYNC error.message', error.message);
}

console.log('FINISH');
