import { authTypeDefs } from './auth/index.js'
import { userTypeDefs } from './user/index.js'
import { hierachyTypeDefs } from './hierachy/index.js'

export const typeDefs = [
  userTypeDefs,
  authTypeDefs,
  hierachyTypeDefs
]
