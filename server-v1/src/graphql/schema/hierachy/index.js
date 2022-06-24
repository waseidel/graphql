import { hierachy } from './resolvers/hierachy.resolver.js'
import { hierachies } from './resolvers/hierachies.resolver.js'
import { hierachyTypeDef } from './typeDefs/hierachy.typeDef.js'
import { hierachiesTypeDef } from './typeDefs/hierachies.typeDef.js'

export const hierachyResolvers = {
  queries: {
    hierachy,
    hierachies
  }
}

export const hierachyTypeDefs = [hierachyTypeDef, hierachiesTypeDef]
