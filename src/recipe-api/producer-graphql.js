const server = require('fastify')();
const graphql = require('fastify-gql');
const fs = require('fs');

const schema = fs.readFileSync(`${__dirname}/../shared/graphql-schema.graphql`);

const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || 4000;

const resolvers = {
    Query: {
        pid: () => process.pid,
        recipe: async (_obj, { id }) => {
            if (id != 42) {
                throw new Error();
            }
        },
    },
};
