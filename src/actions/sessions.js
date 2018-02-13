import {API_BASE_URL} from '../config'; 

export const SESSION_REQUEST = 'SESSION_REQUEST';
export const sessionRequest = () => ({
  type: SESSION_REQUEST
});

export const SESSION_SUCCESS = 'SESSION_SUCCESS';
export const sessionSuccess = (sessions) => ({
  type: SESSION_SUCCESS,
  sessions
});

export const SINGLE_SESSION_SUCCESS = 'SINGLE_SESSION_SUCCESS';
export const singleSessionSuccess = (session) => ({
  type: SINGLE_SESSION_SUCCESS,
  session
});

export const SESSION_ERROR = 'SESSION_ERROR';
export const sessionError = () => ({
  type: SESSION_ERROR
});


export const getSessions = () => dispatch => {
  dispatch(sessionRequest());
  return fetch(`${API_BASE_URL}/sessions`)
      .then(res => {
        if(!res.ok){
          return new Promise.reject(res)
        }
        return res.json()
    })
    .then(res => dispatch(sessionSuccess(res.sessions)))
    .catch(err=> dispatch(sessionError(err)));
};

export const getSessionById = (id) => dispatch => {
  dispatch(sessionRequest());
  return fetch(`${API_BASE_URL}/sessions/${id}`)
      .then(res => {
        if(!res.ok){
          return new Promise.reject(res)
        }
        return res.json()
    })
    .then(res => dispatch(singleSessionSuccess(res)))
    .catch(err=> dispatch(sessionError(err)));
};


