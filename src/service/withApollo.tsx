import { ApolloClient, InMemoryCache, HttpLink, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
    link: new HttpLink({
        uri: 'https://uat-api.vmodel.app/graphql', // Ensure this is your correct GraphQL endpoint
    }),
    cache: new InMemoryCache(),
});

export const withApollo = (Component: React.FC) => {
    return (props: any) => (
        <ApolloProvider client={client}>
            <Component {...props} />
        </ApolloProvider>
    );
};
