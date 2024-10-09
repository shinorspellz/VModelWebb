import { ApolloClient, InMemoryCache, HttpLink, ApolloProvider, NormalizedCacheObject } from '@apollo/client';
import { NextPage } from 'next';
import { useMemo } from 'react';

// Helper function to create Apollo Client instance
function createApolloClient() {
    return new ApolloClient({
        ssrMode: typeof window === 'undefined', // Set this to true for SSR
        link: new HttpLink({
            uri: 'https://uat-api.vmodel.app/graphql', // Your GraphQL endpoint
        }),
        cache: new InMemoryCache(),
    });
}

// Hook to initialize Apollo Client
function useApollo(initialState?: NormalizedCacheObject) {
    const client = useMemo(() => {
        const apolloClient = createApolloClient();
        return apolloClient;
    }, []);
    return client;
}

// HOC to wrap components with ApolloProvider
export const withApollo = (Component: NextPage) => {
    const WithApolloProvider = (props: any) => {
        const client = useApollo(); // Initialize Apollo client

        return (
            <ApolloProvider client={client}>
                <Component {...props} />
            </ApolloProvider>
        );
    };

    WithApolloProvider.displayName = `withApollo(${Component.displayName || Component.name || 'Component'})`;
    return WithApolloProvider;
};
