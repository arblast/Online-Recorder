
module.exports = {
  entry: './frontend/record_cloud.jsx',
  output: {
    path: `${__dirname}/app/assets/javascripts`,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.worker\.js$/,
        use: { loader: 'worker-loader'}
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx' ]
  }
};
