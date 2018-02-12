import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Group from './components/group';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Group />, document.getElementById('root'));
registerServiceWorker();
