const server = require('net').createServer((connection) => {
    console.log('Subscriber connected');

    const first_chunk = '{"type":"changed","timesta';
    const second_chunk = 'mp":1450694370094}\n';

    connection.write(first_chunk);

    const timer = setTimeout(() => {
        connection.write(second_chunk);
        connection.end();
    }, 100);

    connection.on('end', () => {
        clearTimeout(timer);
        console.log('Subscriber disconnected');
    });
});

server.listen(60_300, function () {
    console.log('Test server listening for subscribers...');
});
