import { ApolloClient, InMemoryCache, HttpLink, ApolloProvider, NormalizedCacheObject } from '@apollo/client';
import { NextPage } from 'next';
import { useMemo } from 'react';

// Helper function to create Apollo Client instance with custom headers


// Hook to initialize Apollo Client
const client = new ApolloClient({
    uri: 'https://uat-api.vmodel.app/graphql',
    cache: new InMemoryCache(),
});

// HOC to wrap components with ApolloProvider
export const withApollo = (Component: NextPage) => {
    const WithApolloProvider = (props: any) => {


        return (
            <ApolloProvider client={client}>
                <Component {...props} />
            </ApolloProvider>
        );
    };

    WithApolloProvider.displayName = `withApollo(${Component.displayName || Component.name || 'Component'})`;
    return WithApolloProvider;
};
