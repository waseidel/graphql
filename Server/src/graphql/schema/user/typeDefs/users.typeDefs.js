import { gql } from "apollo-server";

export const usersTypeDef = gql`
  extend type Query {
    users: [User]
  }
`
