import React from 'react';
import { connect } from 'react-redux';

export function SessionsList(props) {
  
  // const sessions = [
  //   {day: 'Thursday', timeStart: '10:00', timeEnd: '12:00', location: 'Coffee Shop'},
  //   { day: 'Tuesday', timeStart: '13:00', timeEnd: '15:00', location: 'Coffee Shop' },
  //   { day: 'Whursday', timeStart: '19:00', timeEnd: '21:00', location: 'Coffee Shop' }
  // ];

  const list = props.sessions.map((session, index) => {
    return (
      <li key={index} className='session-list-item'>
        <a href='#'>
              <p>{session.day} / {session.timeStart} - {session.timeEnd} </p>
              <p>{session.location}</p>
        </a>        
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
  console.log('state.session', state.session);
  return ({
    sessions: state.session.sessions
  });
}

export default connect(mapStateToProps)(SessionsList);