import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {getSessionById} from '../../actions/sessions'

export function SessionsList(props) {
  console.log('props.sessions in list:', props.sessions)
 

  const list = props.sessions.map((session) => {
    return (
      <li key={session.id} className='session-list-item' id={session.id} onClick={()=> props.dispatch(getSessionById(session.id))}>
      {/* <Link to={`/${props.folderID}/${email.id}`}>{email.title}</Link> */}
      <Link to={`/${session.id}`}>
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
  console.log('state in sessionsList', state);
  return ({
    sessions: state.session.sessions
  });
}

export default connect(mapStateToProps)(SessionsList);