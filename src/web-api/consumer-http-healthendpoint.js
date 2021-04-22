const server = require('fastify')();
const fetch = require('node-fetch');

const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || 3000;
const TARGET = process.env.TARGET || 'localhost:4001';

server.get('/', async () => {
    console.log(`worker request pid=${process.pid}`);
    const req = await fetch(`http://${HOST}:${PORT}/recipes/42`);
    const producer_data = await req.json();

    return {
        consumer_pid: process.pid,
        producer_data,
    };
});

server.get('/health', async () => {
    console.log('health check');
    return 'OK';
});

server.listen(PORT, HOST, () => {
    console.log(`Consumer running at http://${HOST}:${PORT}`);
});
