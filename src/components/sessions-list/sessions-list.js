import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import moment from 'moment';


export function SessionsList(props) {
  
  const list = props.sessions
    .sort((a, b) => a[props.sessions.startTime] < b[props.sessions.startTime])
    .map((session) => {
         return(
            <li key={session.id} className='session-list-item' id={session.id} >
              <Link to={`/sessions/${session.id}`}>
               <h3>{moment(session.Date).format('dddd MMMM Do YYYY')}</h3>
               <p>{moment(session.startTime).format('LT')} - {moment(session.endTime).format('LT')} </p>
                <p>Location:  {session.location}</p>
              </Link>
            </li>
        );   
    });


  return (
  <div>  
    <h2> Sessions List </h2>
    <ul className='sessions-list'>
      {list}
    </ul>
  </div>  
  );
}

const mapStateToProps = (state) => {
  return ({
    sessions: state.session.sessions
  });
}

export default connect(mapStateToProps)(SessionsList);