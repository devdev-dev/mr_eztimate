/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  basePath: '/eztimate',
  webpack: (config, options) => {
    // Define an environment variable so source code can check whether or not it's running on the server
    config.plugins.push(
      new options.webpack.DefinePlugin({
        'process.env.NEXT_IS_SERVER': JSON.stringify(options.isServer.toString())
      })
    );

    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader'
    });

    return config;
  }
};
