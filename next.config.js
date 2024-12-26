
const nextIntl = require('next-intl/plugin')();

module.exports = nextIntl({
  // Other Next.js configuration options
  experimental: {
    serverActions: true,}
});