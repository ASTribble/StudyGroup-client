import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';

import store from './store';
import GroupPage from './components/group-page';
import SessionDetail from './components/session-detail/session-detail'
import './index.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <SessionDetail />
    </Router>
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
