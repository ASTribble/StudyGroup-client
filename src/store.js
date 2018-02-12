import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'react-thunk';

import {reducer as formReducer} from 'redux-form';

export default createStore(
  combineReducers({
    form: formReducer,

  }), 
  applyMiddleware(thunk)
)
