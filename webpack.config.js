const config = {
  entry: './src/promiseAllObject.js',
  output: {
    filename: 'promiseAllObject.js',
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