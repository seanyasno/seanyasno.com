const withPwa = require('next-pwa');

/** @type {import('next').NextConfig} */
module.exports = withPwa({
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
  },
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
    path: 'https://res.cloudinary.com/seanyasno/image/upload/',
    loader: 'cloudinary',
  },
});
