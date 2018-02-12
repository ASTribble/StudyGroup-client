import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';

import store from './store';
import Group from './components/group';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Group />
    </Router>
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
