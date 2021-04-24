const usage = process.resourceUsage();
console.log('-> usage', usage);
console.log('-> process.versions', process.versions);
console.log('-> process.uptime()', process.uptime());
console.log('-> process.version', process.version);
console.log('-> process.title', process.title);
process.stdin.pipe(process.stdout);
