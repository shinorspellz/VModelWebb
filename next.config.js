/** @type {import('next').NextConfig} */
const nextConfig ={
    async rewrites() {
        return [
            {
                source: '/.well-known/assetlinks.json',
                destination: '/api/AssetLinks',
            },
        ];
    },
};

module.exports = nextConfig

