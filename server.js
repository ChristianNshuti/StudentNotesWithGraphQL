const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");

// GraphQL schema
const typeDefs = `#graphql
  type Query {
    hello: String
  }
`;

// Resolver
const resolvers = {
  Query: {
    hello: () => "Hello Christian, welcome to GraphQL!"
  }
};

async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
  });

  console.log(`🚀 Server ready at ${url}`);
}

startServer();