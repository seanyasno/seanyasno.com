/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
    path: 'https://res.cloudinary.com/seanyasno/image/upload/',
    loader: 'cloudinary',
  },
};
