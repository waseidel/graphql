import { gql } from 'apollo-server-express'

export const registerTypeDef = gql`
  input RegisterInput {
    firstName: String
    lastName: String
    email: String!
    password: String!
    confirmPassword: String!
  }

  type RegiteredUser {
    user: User!
    token: String!
  }

  type Mutation {
    register(registerInput: RegisterInput!): RegiteredUser
  }
`

