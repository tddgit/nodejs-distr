console.log(`Starting directory: ${process.cwd()}`);

try {
    process.chdir('/tmp');
    console.log(`New directory: ${process.cwd()}`);
} catch (err) {
    console.error(`chdir: ${err}`);
}

console.log(JSON.stringify(process.config));
