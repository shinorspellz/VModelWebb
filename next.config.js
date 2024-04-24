/** @type {import('next').NextConfig} */
const nextConfig ={
    async rewrites() {
        return [
            {
                source: '/.well-known/assetlinks.json',
                destination: '/api/AssetLinks',
            },
            {
                source: '/.well-known/apple-app-site-association.json',
                destination: '/api/AppleLinks',
            }
            
        ];
    },
};

module.exports = nextConfig

