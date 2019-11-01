const path = require('path'),
  webpack = require('webpack'),
  htmlWebpackPlugin = require('html-webpack-plugin'),
  SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin'),
  WebpackPwaManifest = require('webpack-pwa-manifest')

module.exports = {
  mode: 'development',
  entry: {
    app: ['./src/app/App.tsx', 'webpack-hot-middleware/client'],
    vendor: ['react', 'react-dom']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|svg)$/,  
        use: [
          {loader: 'file-loader'},
        ]
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      {
        test: /\.html$/,
        use: [ {
          loader: 'html-loader',
          options: {
            minimize: true
          }
        }],
      },
      {
        test: /\.svg$/,
        loader: 'file-loader'
      },
      
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {configFile: 'tsconfig.json'}
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'app', 'index.html')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new SWPrecacheWebpackPlugin({
      filename: 'mainSW.js',
      cacheId: 'test-App',
      dontCacheBustUrlsMatching: /\.\w{8}\./,
      minify: true,
      navigateFallback: '/index.html'
    }),
    new WebpackPwaManifest({
      name: 'My Progressive Test Web App',
      short_name: 'testPWA',
      description: 'My awesome Progressive Web App!',
      background_color: '#ffffff',
      icons: [
        {
          src: path.resolve('src/app/assets/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
        },
        {
          src: path.resolve('src/app/assets/icon.png'),
          size: '1024x1024' // you can also use the specifications pattern
        }
      ]
    })
  ]
}