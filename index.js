import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import schema from './app/schemas/index.js';
import resolvers from './app/resolvers/index.js';

// Le constructeur ApolloServer nécessite deux paramètres :
// Les schémas et les resolvers
const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
});

// Passation d'une instance ApolloServer à la fonction `startStandaloneServer` :
// 1. crée une application Express
// 2. installe votre instance ApolloServer en tant que middleware
// 3. prépare votre application pour gérer les demandes entrantes
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);