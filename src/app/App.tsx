import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './views';
declare let module: any

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

if(module.hot)
  module.hot.accept()

if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/mainSW.js').then(() => console.log('SW registered'))
}