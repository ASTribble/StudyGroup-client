import { 
  SESSION_REQUEST,
  SESSION_SUCCESS,
  SINGLE_SESSION_SUCCESS,
  SESSION_ERROR
} from '../actions/sessions';


const initialState = {
  loading: false,
  error: null,
  sessions: [],
  detailedSession: {}
}

export default function sessionReducer(state = initialState, action){
  switch (action.type){
    case SESSION_REQUEST:
      return Object.assign ({}, state, {
        loading: true,
        error: null
      });
    case SESSION_SUCCESS:
      return Object.assign ({}, state, {
        loading: false,
        sessions: action.sessions
      });
    case SINGLE_SESSION_SUCCESS:
      return Object.assign ({}, state, {
        loading: false,
        detailedSession: action.session
      });
    case SESSION_ERROR:
      return Object.assign ({}, state, {
        loading: false,
        error: action.error
      });
    default:
      return state;
  }       
}