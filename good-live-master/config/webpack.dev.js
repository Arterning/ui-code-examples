const path = require('path')
const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].js',
    publicPath: 'http://localhost:4000/',
    path: path.resolve(__dirname, '../build'),
  },
  // 指定target为 web
  target: 'web',
  module: {
    rules: [
      // 配置css
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
        // exclude: path.resolve(__dirname, '../src/style'),
      },
      {
        test: /\.less$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
        include: path.resolve(__dirname, '../src'),
      },
      // 配置scss
      {
        test: /\.s[ac]ss$/i,
        use: [
          //从包含CSS的JS代码中 创建 `style` 节点
          {
            loader: 'style-loader',
          },
          // 将 CSS 转换为 CommonJS 格式的JS代码
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          // 将 Sass 转换为 CSS
          {
            loader: 'sass-loader',
          },
        ],
      },
      // // 解析图片 ，字体
      {
        test: /\.(png|jpg|jpeg|gif|woff|woff2|eot|ttf|otf)$/i,
        type: 'asset',
        generator: {
          //与output.assetModuleFilename是相同的,这个写法引入的时候也会添加好这个路径
          filename: 'static/[hash][ext][query]',
        },
        // 只解析src目录
        include: path.resolve(__dirname, '../src'),
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    //
    new ReactRefreshWebpackPlugin({
      exclude: [/node_modules/],
    }),
    // 构建过程支持类型检查
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
    // webpack 构建过程中使用ESLint 进行代码规范校验
    new ESLintPlugin({
      emitError: true,
      extensions: ['js', 'jsx', 'ts', 'tsx'],
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    // contentBase: path.join(__dirname, "../build"),
    historyApiFallback: true,
    port: 4000,
    hot: true,
    static: path.join(__dirname, '../build'),
    // overlay: {
    //   warnings: false,
    //   errors: true,
    // },
    // 当出现编译错误或警告时，在浏览器中显示全屏覆盖。
    client: {
      overlay: {
        warnings: false,
        errors: true,
      },
    },
    //before方法：能够在其他所以的中间件之前执行自定义的中间件
    // before(app) {
    //   resolveApp('src/setupProxy.js')(app)
    // },
    proxy: {
      '/aps': {
        target: 'https://bang.360.cn',
        changeOrigin: true,
        pathRewrite: {
          '^/aps': '',
        },
      },
    },
  },
})
