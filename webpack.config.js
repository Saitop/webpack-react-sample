const webpack = require('webpack');
module.exports = {
  entry: './app/components/app.jsx',

  output: {
    filename: 'public/bundle.js'
  },

  devServer: {
    inline: true,
    port: 3333
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loaders: [
              'file?hash=sha512&digest=hex&name=public/[hash].[ext]',
              'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
          ]
      }
    ]
  },

  // plugins: [
  //   new webpack.optimize.UglifyJsPlugin({
  //     compress: {
  //         warnings: false,
  //     },
  //     output: {
  //         comments: false,
  //     },
  //   })
  // ]
}
