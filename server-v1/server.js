import { ApolloServer } from 'apollo-server'
// import { applyMiddleware } from 'graphql-middleware'

import './src/db/index.js'
import { typeDefs } from './src/graphql/schema/typeDefs.js'
import { resolvers } from './src/graphql/schema/resolvers.js'

const startApolloServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req })
  })

  try {
    const { url } = await server.listen()
    console.log(`🚀 Server ready at ${url}`)
  } catch (error) {
    console.error(error.message)
  }
}
startApolloServer()
