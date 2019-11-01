const path = require('path'),
  express = require('express'),
  webpack = require('webpack'),
  webpackConfig = require('./webpack.config');

const app = express(),
  port = process.env.PORT || 5000;

app.listen(port , () => {
  console.log(`Server running at port: ${port}`)
});
app.use('/assets', express.static(path.resolve(__dirname, './src/app/assets')))
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

let compiler = webpack(webpackConfig);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true
  }
}));

app.use(require('webpack-hot-middleware')(compiler));
app.use(express.static(path.resolve(__dirname, 'dist')));