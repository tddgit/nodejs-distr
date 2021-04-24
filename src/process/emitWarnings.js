process.emitWarning('Something happen');

process.emitWarning('Somethin happen', 'Custom warning', 'WAR001');

process.on('warning', (warning) => {
    console.warn(warning.name);
    console.warn(warning.message);
    console.warn(warning.code);
    console.warn(warning.stack);
});

const myWarning = new Error('Something happen!');

myWarning.name = 'Custom warning';
myWarning.code = 'WARN002';

process.emitWarning(myWarning);
