const config = {
  entry: './es/promiseObject.js',
  output: {
    filename: 'promiseObject.js',
    library: 'promise-object',
    libraryTarget: 'commonjs2',
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      }
    ]
  },
};
module.exports = config;