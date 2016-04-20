module.export = {
  entry: ".app/components/Main.js",
  output: {
    filename: "public/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          preset: ['react', 'es2015']
        }
      }
    ]
  }
}
