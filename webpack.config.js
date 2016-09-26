module.exports = {
  entry: './web/App.js',
  output: {
    path: 'web/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  }
};
