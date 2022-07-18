import { gql } from 'apollo-server';

export const userTypeDef = gql`
  type User {
    id: ID
    firstName: String
    lastName: String
    email: String
  }

  type Query {
    user(id: ID!): User
  }
`
