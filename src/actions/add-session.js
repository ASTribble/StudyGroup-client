import {API_BASE_URL} from '../config'; 
import {sessionRequest, sessionError, getSessions} from './get-sessions';
import {firstLetterToUppercase, filterUndefinedNotes} from './helper-functions';



const addSessionAPI = values => {

    const notes = filterUndefinedNotes([values.notes1, values.notes2, values.notes3]);
    // const date = new Date(values.date)
    // const values = if(parseInt(values.start))

    const newSession = {
        date: values.date,
        startTime: values.start,
        endTime: values.end,
        location: values.location,
        notes: firstLetterToUppercase(notes),
        attendees: firstLetterToUppercase([values.name])
    };

    const query = {
        method: 'POST', 
        body: JSON.stringify(newSession),
        headers: new Headers({'Content-Type': 'application/json'})
    }; 

    return fetch(`${API_BASE_URL}/sessions`, query);
};  


export const addSession = (values) => dispatch => {
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