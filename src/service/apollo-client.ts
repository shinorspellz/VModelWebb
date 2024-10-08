import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

let apolloClient: ApolloClient<any> | null = null;

function createApolloClient() {
    return new ApolloClient({
        ssrMode: typeof window === 'undefined', // Disable SSR on the client
        link: new HttpLink({
            uri: 'https://uat-api.vmodel.app/graphql', // Replace with your GraphQL endpoint
            credentials: 'include', // Send cookies if needed
        }),
        cache: new InMemoryCache(),
    });
}
