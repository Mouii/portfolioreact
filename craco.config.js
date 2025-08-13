const WebpackObfuscator = require('webpack-obfuscator');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  webpack: {
    configure: (config, { env }) => {
      if (env === 'production') {
        config.devtool = false; // no source maps
        config.optimization.minimize = true;
        config.optimization.minimizer = [
          new TerserPlugin({
            terserOptions: {
              compress: { drop_console: true },
              mangle: true,
              format: { comments: false }
            },
            extractComments: false
          })
        ];
        config.plugins.push(
          new WebpackObfuscator(
            {
              compact: true,
              controlFlowFlattening: true,
              stringArray: true,
              stringArrayEncoding: ['base64'],
              stringArrayThreshold: 0.75,
              rotateStringArray: true
            },
            ['**/static/js/runtime-*.js', '**/static/js/vendors-*.js']
          )
        );
      }
      return config;
    }
  }
};