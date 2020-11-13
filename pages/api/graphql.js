import { ApolloServer } from 'apollo-server-micro';
import { typeDefs, resolvers } from '@/lib/api';

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: { bodyParser: false },
};

export default apolloServer.createHandler({ path: '/api/graphql' });
