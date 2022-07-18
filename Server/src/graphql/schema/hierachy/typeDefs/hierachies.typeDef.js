import { gql } from "apollo-server";

export const hierachiesTypeDef = gql`
  extend type Query {
    hierachies: [Hierachy]
  }
`
