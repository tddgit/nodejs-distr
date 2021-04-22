#!/usr/bin/env node

const server = require('fastify')();

const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || 4002;

console.log(`worker pid=${process.pid}`);

server.get('/:limit', async (req, reply) => {
    return String(fibonacci(Number(req.params.limit)));
});

server.listen(PORT, HOST, () => {
    console.log(`Producer running at ${HOST}:${PORT}`);
});

function fibonacci(limit) {
    let prev = 1n;
    let next = 0n;
    let swap;
    while (limit) {
        swap = prev;
        prev += next;
        next = swap;
        limit--;
    }
    return next;
}
