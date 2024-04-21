/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/',
                destination: 'https://www.text2sql.ai/api/sql/generate',
            },
        ]
    },
};

export default nextConfig;
