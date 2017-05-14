const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const PROD = false;
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, "build",PROD ? "release" : "debug"),
    filename: 'build.[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: "eslint-loader",
        enforce: "pre",
        include: [path.resolve(__dirname,'src')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            scss: ExtractTextPlugin.extract({
              use: ['css-loader','sass-loader'],
              fallback: 'vue-style-loader'
            }),
            css: ExtractTextPlugin.extract({
              use: 'css-loader',
              fallback: 'vue-style-loader'
            })
            // sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          },
          // other vue-loader options go here
          // css: ExtractTextPlugin.extract({
          //     use: 'css-loader',
          //     fallback: 'vue-style-loader'
          //   })
          // css: 'vue-style-loader!css-loader'
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
            use: ['css-loader']
        })
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: 'img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "index.html",
      inject: true,
      hash: false
    }),
    new ExtractTextPlugin({
      filename: "style.[hash].css",
      allChunks: true
    })
  ],
  resolve: {
    extensions: ['.js','.vue','.json'],
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  devServer: {
    contentBase: "./build/debug",
    historyApiFallback: true,
    noInfo: true,
    publicPath: "/",
    port: 9000,
    proxy: {
      "/api": {
        target: "http://172.16.100.7:8108",
        pathRewrite: {"^/api": ""}
      }
    }
  },
  performance: {
    hints: false
  },
  devtool: '#source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
