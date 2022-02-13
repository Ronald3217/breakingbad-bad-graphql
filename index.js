const { ApolloServer, gql } = require('apollo-server');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');

const typeDefs = require('./db/schema');
const resolvers = require('./db/resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [
    ApolloServerPluginLandingPageGraphQLPlayground
  ]
});

//iniciar el servidor
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`Servidor corriendo en ${url}`);
});