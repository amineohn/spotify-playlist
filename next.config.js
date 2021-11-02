/** @type {import('next').NextConfig} */
const { withSuperjson } = require("next-superjson");

module.exports = {
  reactStrictMode: true,
};

module.exports = withSuperjson()({});
