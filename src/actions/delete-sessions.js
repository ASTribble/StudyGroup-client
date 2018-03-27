import {API_BASE_URL} from '../config'; 
import {sessionRequest, sessionError, getSessions} from './get-sessions';


export const deleteSessionAPI = id => {
   
    const query = {
        method: 'DELETE', 
        body: JSON.stringify({id}),
        headers: new Headers({'Content-Type': 'application/json'})
    }; 

    return fetch(`${API_BASE_URL}/sessions/${id}`, query);
};  

export const deleteSessionById = id => dispatch => {
    dispatch(sessionRequest);
    return deleteSessionAPI(id)
    .then(res => {
        if(!res.ok){
            return new Promise.reject(res)
        }
        return res.json();
    })
    .then(()=> dispatch(getSessions()))
    .catch(err => dispatch(sessionError(err)));
}