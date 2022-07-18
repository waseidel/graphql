import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client"
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/'
})

const authLink = setContext((_, { headers }) => {
  let token = ''
  const item = localStorage.getItem('token')
  if (item) {
    const user = JSON.parse(item)
    token = user.token
  }
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

export default client;