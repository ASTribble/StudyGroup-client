import { 
  SESSION_REQUEST,
  SESSION_SUCCESS,
  SESSION_ERROR
} from '../actions/sessions';


const initialState = {
  loading: false,
  error: null,
  sessions: [],
  detailedSession: {
    date: 'Tuesday, 24 February',
    startTime: '5pm',
    endTime: '6pm',
    location: 'Coffee Shop',
    notes: ['meeting in back room', 'bring crayons'],
    attendees: ['sarah', 'timmy', 'joe']
  }
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
    case SESSION_ERROR:
      return Object.assign ({}, state, {
        loading: false,
        error: action.error
      });
    default:
      return state;
  };        
}