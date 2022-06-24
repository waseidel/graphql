import { gql } from "apollo-server"

export const loginTypeDef = gql`
  input LoginInput {
    email: String!
    password: String!
  }
  extend type Mutation {
    login(loginInput: LoginInput!): RegiteredUser
  }
`