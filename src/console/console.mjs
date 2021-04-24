import { Console } from 'console';
import fs from 'fs';

console.assert(5 === 4, 'Shit happens %s', false);

console.log('First level');
console.groupCollapsed();
console.log('2 Level');
console.groupCollapsed();
console.log('3 level');
console.info('3 level one more');
console.groupEnd('third_level');
console.debug('2 Level one more');
console.groupEnd('second_level');
console.log('Back to level 1');

// console.log("This is the outer level");
// console.group();
// console.log("Level 2");
// console.group();
// console.log("Level 3");
// console.warn("More of level 3");
// console.groupEnd();
// console.log("Back to level 2");
// console.groupEnd();
// console.log("Back to the outer level");

console.time('100-elements');

for (let i = 0; i < 100; i++) {}

for (let i = 0; i < 100; i++) {}

console.timeEnd('100-elements');

console.trace('Show me');

console.profile('MyLabel');
let str = '';
loop1: for (let i = 0; i < 5; i++) {
    if (i === 1 || i === 2) {
        continue loop1;
    }
    str = str + i;
}

console.timeStamp('MyLabel');
console.profileEnd('MyLabel');

const output = fs.createWriteStream('./stdout.log');
const errorOutput = fs.createWriteStream('./stderr.log');

const logger = new Console({
    stdout: output,
    stderr: errorOutput,
});

const count = 5;

logger.log('count: %d', count);

console.time('LOOP1');

loop1: for (let i = 0; i < 5; i++) {
    if (i === 1 || i === 2) {
        continue loop1;
    }
    str = str + i;
}

console.timeEnd('LOOP1');

console.debug('DEBUG');

console.info('INFO');

console.error('error #%d', 5);

console.count('loop1');

console.log('hello %s', 'world');
console.log('hello %d', 12);

// console.error(new Error('shit happens'));

const name = 'Will Robinson';
console.warn(`Danger ${name}! Danger!`);

// const myConsole = new console.Console(out, err)
//
// const out = getStreamSomehow()
//
// const err = getStreamSomehow()
