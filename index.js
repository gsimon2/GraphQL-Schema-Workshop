const { ApolloServer } = require("apollo-server");
const { readFileSync } = require("fs");

const typeDefs = readFileSync("./typeDefs.graphql", "UTF-8");

const resolvers = {
  Query: {
    totalPets: () => 22
  }
};

const server = new ApolloServer({ typeDefs, mocks: true });

server.listen().then(({ url }) => {
  console.log(`Server running at ${url}`);
});
