const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'client/src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'client/dist')
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /.js$|.jsx$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader',
               options: {
                 presets: ['@babel/preset-react', '@babel/preset-env']
               }
              }
      }
    ]
  },
}