import { InMemoryCache, ApolloClient, HttpLink } from '@apollo/client'

const GRAPHQL_ENDPOINT = `http://192.168.1.196:8000/graphql`;
// const GRAPHQL_ENDPOINT = `https://anilist.co/graphql`;
const createApolloClient = () => {
  const link = new HttpLink({
    uri: GRAPHQL_ENDPOINT,
    // headers: {
    //   'Authorization': `Bearer ${token}`
    // }
  });
  return new ApolloClient({
    link,
    cache: new InMemoryCache()
  })
}

const client = createApolloClient();

export default client;