import {API_BASE_URL} from '../config'; 
import {sessionRequest, sessionError, getSessions} from './get-sessions';

export const filterUndefinedNotes = notes => notes.filter(note => note !== undefined
);

export const addSessionAPI = values => {
    const notes = filterUndefinedNotes([values.notes1, values.notes2, values.notes3]);
    
    console.log('notes:', notes);
    const newSession = {
        date: values.date,
        startTime: values.start,
        endTime: values.end,
        location: values.location,
        notes: notes,
        attendees: [values.name]
    };

    const query = {
        method: 'POST', 
        body: JSON.stringify(newSession),
        headers: new Headers({'Content-Type': 'application/json'})
    }; 

    return fetch(`${API_BASE_URL}/sessions`, query);
};  

export const addSession = (values) => dispatch => {
    console.log('addSession was called')
    dispatch(sessionRequest());
    return addSessionAPI(values)
        .then(res => {
          if(!res.ok){
            return new Promise.reject(res)
          }
          return res.json()
        })
        .then(res => dispatch(getSessions()))
        .catch(err=> dispatch(sessionError(err)));
  };