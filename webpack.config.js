module.exports = {
  mode: 'development',
  output: {
    filename: 'main.js',
  },
  stats: {
    colors: true,
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
    ],
  },
  externals: {
    jquery: 'jQuery',
  },
};
