#!/usr/bin/env node

const fetch = require('node-fetch');
const server = require('fastify')();

const memcache = require('memjs').Client.create('localhost:11211');

const PORT = process.env.PORT || 3001;

server.get('/accounts/:account', async (req, reply) => {
    return getAccount(req.params.account);
});

server.listen(PORT, () =>
    console.log(`Server listening on http://localhost:${PORT}`),
);

async function getAccount(account) {
    const { value: cached } = await memcache.get(account);
    if (cached) {
        console.log('cache hit');
        return JSON.parse(cached);
    }

    console.log('cache miss');
    const result = await fetch(`https://api.github.com/users/${account}`);
    const body = await result.text();
    await memcache.set(account, body, {});
    return JSON.parse(body);
}
