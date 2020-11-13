import { getCategories, getCategoryById, createCategory, updateCategory, removeCategory } from './service';

const resolvers = {
  Query: {
    categories: async () => await getCategories(),
    category: async (parent, { _id }) => await getCategoryById(_id),
  },

  Mutation: {
    createCategory: async (parent, { input }) => await createCategory(input),
    updateCategory: async (parent, { input }) => await updateCategory(input),
    removeCategory: async (parent, { input }) => await removeCategory(input),
  },
};

export default resolvers;
