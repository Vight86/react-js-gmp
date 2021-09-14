const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = (env) => {
  const commonConfig = {
    entry: './src/index.js',
    output: {
      filename: 'App.js', // test [name]
      path: path.resolve(__dirname, 'dist'),
      clean: true,
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /.(js|jsx)$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
    ],
  };

  if (env.mode === 'development') {
    return {
      ...commonConfig,
      mode: env.mode,
      devtool: 'inline-source-map',
      devServer: {
        static: './dist',
        hot: true,
        open: true,
      },
      module: {
        rules: [
          ...commonConfig.module.rules,
          {
            test: /\.(scss|css)$/,
            use: ['style-loader',
              {
                loader: 'css-loader',
                options: {
                  modules: {
                    localIdentName: '[name]__[local]__[hash]',
                  },
                },
              },
              'postcss-loader',
              'sass-loader'],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
          },
        ],
      },
    };
  }

  return {
    ...commonConfig,
    mode: env.mode,
    devtool: 'source-map',
    module: {
      rules: [
        ...commonConfig.module.rules,
        {
          test: /\.(scss|css)$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '../',
              },
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2,
                modules: {
                  localIdentName: '[hash:base64]',
                },
              },
            },
            'postcss-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'assets/images/[contenthash][ext]',
          },
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'assets/fonts/[contenthash][ext]',
          },
        },
      ],
    },
    plugins: [
      ...commonConfig.plugins,
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash].css',
      }),
      new ImageMinimizerPlugin({
        severityError: 'warning',
        minimizerOptions: {
          plugins: [
            ['gifsicle', { interlaced: true }],
            ['jpegtran', { progressive: true }],
            ['optipng', { optimizationLevel: 5 }],
            ['svgo'],
          ],
        },
      }),
    ],
  };
};
