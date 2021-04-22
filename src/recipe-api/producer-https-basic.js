const fs = require('fs');
const server = require('fastify')({
    https: {
        key: fs.readFileSync(`${__dirname}/tls/basic-private-key.key`),
        cert: fs.readFileSync(
            `${__dirname}/../shared/tls/basic-certificate.cert`,
        ),
    },
});

const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || 4000;
