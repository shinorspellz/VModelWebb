import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { BatchHttpLink } from '@apollo/client/link/batch-http';
const client = new ApolloClient({
    uri: 'https://uat-api.vmodel.app/graphql',
    cache: new InMemoryCache(),
});

export default client;