/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  env: {
    DB_URI: process.env.DB_URI,
    DB_USER: process.env.DB_USER,
    DB_TEST: process.env.DB_TEST,
    GOOGLE_MAPS_KEY: process.env.GOOGLE_MAPS_KEY,
    MONGODB_DB: process.env.MONGODB_DB,
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    config.resolve.alias['@/app'] = path.resolve(__dirname, 'app');
    return config;
  },
}

module.exports = nextConfig
