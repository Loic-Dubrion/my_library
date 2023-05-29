import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// eslint-disable-next-line import/no-extraneous-dependencies
import Debug from 'debug';
import schema from './app/schemas/index.js';
import resolvers from './app/resolvers/index.js';
import mongooseClient from './app/services/client.js';

// Créer un debug logger
const debug = Debug('app:server');

// Le constructeur ApolloServer nécessite trois paramètres :
// Les schémas et les resolvers et le contexte
const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: {
    db: mongooseClient,
  },
});

// Passation d'une instance ApolloServer à la fonction `startStandaloneServer` :
// 1. crée une application Express
// 2. installe une instance ApolloServer en tant que middleware
// 3. prépare à gérer les demandes entrantes
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

debug(`🚀  Server ready at: ${url}`);
