const webpack = require('webpack');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const dotenv = require('dotenv')

dotenv.config();

module.exports = function (context, options) {
  return {
    name: 'custom-docusaurus-webpack-config-plugin',
    configureWebpack(config, isServer, utils) {
      return {
        resolve: {
          fallback: {
            http: require.resolve('stream-http'),
            fs: false,
            /*'process/browser': require.resolve('process/browser')*/
          },
        },
        plugins: [
          /*new webpack.ProvidePlugin({
            process: 'process/browser',
          }),*/
          /*new webpack.DefinePlugin({
            "process.versions.node": JSON.stringify(process.versions.node || "0.0.0"),
          }),*/
          new webpack.DefinePlugin({
            'process.env': JSON.stringify(process.env),
          }),
          new NodePolyfillPlugin(),
        ],
      };
    },
  };
};