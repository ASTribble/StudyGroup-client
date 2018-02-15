import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';



export function SessionsList(props) {

 const list = props.sessions.map((session) => {
    return (
      <li key={session.id} className='session-list-item' id={session.id} >
      <Link to={`/sessions/${session.id}`}>
              <p>{session.date} / {session.startTime} - {session.endTime} </p>
              <p>{session.location}</p>
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