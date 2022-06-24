import { gql } from "apollo-server";

export const hierachyTypeDef = gql`
  scalar DateTime

  type Hierachy {
    id: ID 
    name: String
    description: String
    status: Boolean
    afectaOp: Boolean
    parent: Hierachy
    children: [Hierachy]
    createdAt: DateTime
    updatedAt: DateTime
  }

  extend type Query {
    hierachy(id: ID!): Hierachy
  }
`
