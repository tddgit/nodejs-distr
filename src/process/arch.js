console.log(`This process architecture is: ${process.arch}`);
const args = process.argv;
console.log(args);
console.log(`0 element of args: ${process.argv0}`);

process.argv.forEach((arg, index) => {
    console.log(`${arg}:${index}`);
});
