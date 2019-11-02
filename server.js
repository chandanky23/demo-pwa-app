const path = require('path')
const express = require('express')
// webpackConfig = require('./webpack.config');
// webpack = require('webpack'),

const port = process.env.PORT || 5000

const app = express()

// app.use('/assets', express.static(path.resolve(__dirname, './src/app/assets')))
// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
// });

// let compiler = webpack(webpackConfig);

// app.use(require('webpack-dev-middleware')(compiler, {
//   noInfo: true,
//   publicPath: webpackConfig.output.publicPath,
//   stats: {
//     colors: true
//   }
// }));

// For production
if(process.env.NODE_ENV === 'production') {
  // Set Static Folder
  app.use(express.static(path.join(__dirname, 'dist')))
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'))
  })
}

// app.use(require('webpack-hot-middleware')(compiler));
// app.use(express.static(path.resolve(__dirname, 'dist')));

app.listen(port , () => {
  console.log(`Server running at port: ${port}`)
});