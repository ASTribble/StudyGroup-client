import React from 'react';
import { connect } from 'react-redux';

export default function SessionsList(props) {
  
  const sessions = [
    {day: 'Thursday', timeStart: '10:00', timeEnd: '12:00', location: 'Coffee Shop'},
    { day: 'Tuesday', timeStart: '13:00', timeEnd: '15:00', location: 'Coffee Shop' },
    { day: 'Whursday', timeStart: '19:00', timeEnd: '21:00', location: 'Coffee Shop' }
  ];

  const list = sessions.map((session, index) => {
    return (<li key={index} className='session-list-item'>
              <p>{session.day} / {session.timeStart} - {session.timeEnd} </p>
              <p>{session.location}</p>
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