import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import {reducer as formReducer} from 'redux-form';
import sessionReducer from './reducers/session'

export default createStore(
  combineReducers({
    form: formReducer,
    session: sessionReducer
  }), 
  applyMiddleware(thunk)
)
