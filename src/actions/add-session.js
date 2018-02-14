import {API_BASE_URL} from '../config'; 
import {sessionRequest, sessionError} from './get-sessions';


export const addSessionAPI = values => {

    const newSession = {
        date: values.date,
        startTime: values.start,
        endTime: values.end,
        location: values.location,
        notes:[values.notes1, values.notes2, values.notes3],
        attendees: values.name
    };

    const query = {
        method: 'POST', 
        body: JSON.stringify({newSession}),
        headers: new Headers({'Content-Type': 'application/json'})
    }; 

    return fetch(`${API_BASE_URL}/sessions`, query);
}  

export const addSession = (values) => dispatch => {
    dispatch(sessionRequest());
    return addSessionAPI(values)
        .then(res => {
          if(!res.ok){
            return new Promise.reject(res)
          }
          return res.json()
      })
    //   .then(res => dispatch(addSessionSuccess(res)))
      .then(res => console.log(res))
      .catch(err=> dispatch(sessionError(err)));
  };