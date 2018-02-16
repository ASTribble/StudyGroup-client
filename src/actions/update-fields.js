import {API_BASE_URL} from '../config'; 
import {sessionRequest, sessionError, getSessionById} from './get-sessions';
import {firstLetterToUppercase} from './helper-functions';

export const makeUpdateField = (field, session) => {
    const key = Object.keys(field)[0];
    
    if(key === 'name'){
            const attendees = firstLetterToUppercase([...session.attendees, field.name]);
            return {attendees}

    }
    if(key === 'note'){
        const notes = firstLetterToUppercase([...session.notes, field.note]);
        return {notes}
    }
}

export const makeDeletedField = (field, session) => {
    const key = Object.keys(field)[0];
    
    if(key === 'nameToDelete'){
        const filteredNames = session.attendees.filter(attendee => 
            attendee.toLowerCase() !== field[key].toLowerCase());

        const attendees = firstLetterToUppercase(filteredNames);
            return {attendees};
    }
    if(key === 'noteToDelete'){
        const filteredNotes = session.notes.filter(note => 
            note.toLowerCase() !== field[key].toLowerCase());

        const notes = firstLetterToUppercase(filteredNotes);
        return {notes};
    }
}


export const updateSessionFieldAPI = (field, id) => {

    const updateBody = {...field, id}
   
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
        .catch(err => dispatch(sessionError(err)));
  };