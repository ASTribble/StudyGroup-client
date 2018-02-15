import {API_BASE_URL} from '../config'; 
import {sessionRequest, sessionError, getSessions, getSessionById} from './get-sessions';


export const makeUpdateField = (field, session) => {

    if(Object.keys(field)[0] === 'name'){
        const attendees = [...session.attendees, field.name]
        return {attendees}
    }
    if(Object.keys(field)[0] === 'note'){
        const notes = [...session.notes, field.note]
        return {notes}
    }
}


export const updateSessionFieldAPI = (field, id) => {

    console.log('updateSessionFieldAPI was called');
    const updateBody = {...field, id}
   
    console.log('updateBody:', updateBody);
    const query = {
        method: 'PUT', 
        body: JSON.stringify(updateBody),
        headers: new Headers({'Content-Type': 'application/json'})
    }; 

    return fetch(`${API_BASE_URL}/sessions/${id}`, query);
};  





export const updateSessionField = (field, id) => dispatch => {
    dispatch(sessionRequest());
    return updateSessionFieldAPI(field, id)
        .then(res => {
          if(!res.ok){
            return new Promise.reject(res)
          }
          return res.json();
         })
        .then(() => dispatch(getSessionById(id)))
        // .then(session => console.log(session))
        // .catch(err => console.error(err));
    //     .then(res => dispatch(getSessions()))
        .catch(err => dispatch(sessionError(err)));
  };