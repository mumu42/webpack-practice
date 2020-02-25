const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (moduleName) => {
  return {
    mode: 'development',
    entry: path.resolve(__dirname, `../src/views/${moduleName}/index.ts`),
    output: {
      path: path.resolve(__dirname, `../dist`),
      filename: `${moduleName}.bundle.[hash].js`
    },
    module: {
      rules: [
        {
          test: /\.(scss|css|sass)$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                publicPath: 'icon',
                name: '[name].[ext]',
                outputPath: '/dist/static',
                limit: 10000
              }
            }
          ]
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: path.resolve(__dirname, '../node_modules')
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'css/[chunkhash].[name].css',
        chunkFilename: '[id].css'
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, `../src/views/${moduleName}/index.html`),
        filename: `${moduleName}.index.html`,
        hash: true
      })
    ]
  }
}
