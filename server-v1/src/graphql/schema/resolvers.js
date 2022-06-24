import { authResolvers } from './auth/index.js'
import { userResolvers } from './user/index.js'
import { hierachyResolvers } from './hierachy/index.js'

export const resolvers = {
  Mutation: {
    ...authResolvers.mutations
  },
  Query: {
    ...userResolvers.queries,
    ...hierachyResolvers.queries,
    ...authResolvers.queries
  }
}
