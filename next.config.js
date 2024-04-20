/** @type {import('next').NextConfig} */
const nextBuildId = require('next-build-id')

const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    generateBuildId: () => nextBuildId({ dir: __dirname, describe: true})
}

module.exports = nextConfig
