// apollo-client.ts
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Cookies from 'js-cookie'; // or your preferred method for managing cookies/local storage

const httpLink = createHttpLink({
    uri: 'http://localhost:4000/graphql', // Replace with your GraphQL server URL
});

const authLink = setContext((_, { headers }) => {
    // Get the authentication token from local storage or cookies
    const token = Cookies.get('token'); // Replace with your method of obtaining the token
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

export default client;
