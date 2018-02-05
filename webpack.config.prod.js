var webpack = require("webpack");

module.exports = {
  entry: './frontend/record_cloud.jsx',
  output: {
    path: `${__dirname}/app/assets/javascripts/sitewide`,
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
      }
    ]
  },
  plugins:[
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        warnings: true
      },
      exclude: `${__dirname}/frontend/util/`,
    })
  ],
  devtool: 'cheap-module-source-map',
  resolve: {
    extensions: ['.js', '.jsx' ]
  }
};
