import { user } from './resolvers/user.resolver.js'
import { users } from './resolvers/users.resolver.js'
import { userTypeDef } from './typeDefs/user.typeDefs.js'
import { usersTypeDef } from './typeDefs/users.typeDefs.js'

export const userResolvers = {
  queries: { user, users },
}

export const userTypeDefs = [userTypeDef, usersTypeDef]

