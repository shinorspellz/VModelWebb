module.exports = {
    async rewrites() {
        return [
            {
                source: '/graphql',
                destination: 'https://uat-api.vmodel.app/graphql',
            },
        ];
    },
};
