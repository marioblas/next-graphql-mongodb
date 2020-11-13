import merge from 'lodash.merge';
import { typeDefs as Base } from './base';
import { typeDefs as Categories, resolvers as categoriesResolvers } from './categories';

const typeDefs = [Base, Categories];

const resolvers = merge({}, categoriesResolvers);

export { typeDefs, resolvers };
