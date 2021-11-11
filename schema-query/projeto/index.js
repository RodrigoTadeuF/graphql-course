const { AppoloServer, gql } = require('apollo-server');

const typeDefs = gql``

const resolvers = {}

const server = new AppoloServer({
    typeDefs,
    resolvers
});

server.listen().then(({ url }) => {
    console.log(`Executing in ${url}`)
})