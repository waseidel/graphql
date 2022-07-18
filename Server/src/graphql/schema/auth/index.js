import { register } from './resolvers/register.resolver.js'
import { login } from './resolvers/login.resolver.js'
import { validateToken } from './resolvers/validate_token.resolver.js'
import { registerTypeDef } from './typeDefs/register.typeDef.js'
import { loginTypeDef } from './typeDefs/login.typeDef.js'
import { validateTokenTypeDef } from './typeDefs/validate_token.typeDef.js'

export const authResolvers = {
  mutations: { register, login },
  queries: { validateToken }
}

export const authTypeDefs = [registerTypeDef, loginTypeDef, validateTokenTypeDef]
