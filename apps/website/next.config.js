// eslint-disable-next-line @typescript-eslint/no-var-requires

console.debug(`> Building on NODE_ENV="${process.env.NODE_ENV}"`);

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');

module.exports = withNx(
  /**
   * Next.js configuration
   * References:
   * https://github.com/vercel/next.js/blob/canary/packages/next/next-server/server/config.ts#L12-L63
   * https://nextjs.org/docs/api-reference/next.config.js/introduction
   */
  {
    images: {
      domains: [
        'i.scdn.co', // Spotify Album Art
        'pbs.twimg.com', // Twitter Profile Picture
      ],
    },
    webpack: (
      config,
      { _buildId, dev, isServer, _defaultLoaders, _webpack }
    ) => {
      // Uncomment to display the Webpack config
      //console.log(config);

      if (!isServer) {
        require('./generate-sitemap');
        require('./generate-rss');
      }

      return config;
    },
    typescript: {
      /**
       * `lint:types` ran in CI already so we can safely assume no errors
       *  here, conveniently reducing build time by ~55%
       * @see https://nextjs.org/docs/api-reference/next.config.js/ignoring-typescript-errors
       */
      ignoreBuildErrors: true,
    },
    /**
     * Disable powered by header
     */
    poweredByHeader: false,
    trailingSlash: false,
    reactStrictMode: true,
    swcMinify: true,
  }
);
