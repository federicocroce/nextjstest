const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
// module.exports = withBundleAnalyzer({})
module.exports = {
  distDir: 'build',
  withBundleAnalyzer: withBundleAnalyzer({})
}