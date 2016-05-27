const webpack = require('webpack');
module.exports = {
  entry: "./app/components/app.jsx",
  output: {
    filename: "public/bundle.js"
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
        loader: "style!css"
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
          warnings: false,
      },
      output: {
          comments: false,
      },
    })
  ]
}
