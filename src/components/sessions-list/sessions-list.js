import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

export function SessionsList(props) {
  console.log('props.sessions in list:', props.sessions)
  // const sessions = [
  //   {day: 'Thursday', timeStart: '10:00', timeEnd: '12:00', location: 'Coffee Shop'},
  //   { day: 'Tuesday', timeStart: '13:00', timeEnd: '15:00', location: 'Coffee Shop' },
  //   { day: 'Whursday', timeStart: '19:00', timeEnd: '21:00', location: 'Coffee Shop' }
  // ];

  const list = props.sessions.map((session, index) => {
    return (
      <li key={index} className='session-list-item'>
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