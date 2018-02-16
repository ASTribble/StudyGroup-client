import {API_BASE_URL} from '../config'; 
import {sessionRequest, sessionError, getSessions} from './get-sessions';
import {firstLetterToUppercase, filterUndefinedNotes, makeTime} from './helper-functions';
import moment from 'moment';


const addSessionAPI = values => {
console.log('going in API:', values.date)
    const date = new Date(values.date);
    const startTime = new Date(`${values.date} ${makeTime(values.start)}`);
    const endTime = new Date(`${values.date} ${makeTime(values.end)}`);
    const notes = filterUndefinedNotes([values.notes1, values.notes2, values.notes3]);
    
    console.log('date:', date, 'startTime:', startTime, 'endTime:', endTime);

    const newSession = {
        startTime,
        endTime,
        location: firstLetterToUppercase([values.location]),
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