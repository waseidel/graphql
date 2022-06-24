import { gql } from 'apollo-server-express'

export const validateTokenTypeDef = gql`
  extend type Query {
    validateToken: Boolean!
  }
`