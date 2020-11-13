import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  type Category {
    _id: ID!
    name: String!
  }

  extend type Query {
    categories: [Category]
    category(_id: ID!): Category
  }

  extend type Mutation {
    createCategory(input: CreateCategoryInput!): Category!
    updateCategory(input: UpdateCategoryInput!): Category!
    removeCategory(input: RemoveCategoryInput!): Category!
  }

  input CreateCategoryInput {
    name: String!
  }

  input UpdateCategoryInput {
    _id: ID!
    name: String
  }

  input RemoveCategoryInput {
    _id: ID!
  }
`;

export default typeDefs;
