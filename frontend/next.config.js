/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns : [
            {
                protocol: 'https',
                hostname: 'i.ytimg.com'
            }
        ]

    },
    env : {
        URL : process.env.URL
    },
}

module.exports = nextConfig
