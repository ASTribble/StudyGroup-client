import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import moment from 'moment';
import './sessions-list.css';


export class SessionsList extends React.Component {

  render() {

  const validSessions = (this.props.sessions.filter(s => s.endTime > moment().format()));
  
  const list = validSessions
    .sort((a, b) => a.startTime > b.startTime)
    .map((session) => {
         return(
            <li key={session.id} className='session-list-item' id={session.id} >
              <Link to={`/sessions/${session.id}`}>
               <h3 className='visited-lilac'>{moment(session.startTime).format('dddd, MMM Do YYYY')}</h3>
               <p>{moment(session.startTime).format('LT')} - {moment(session.endTime).format('LT')} </p>
                <p>{session.location}</p>
              </Link>
            </li>
        );   
    });
 

      return (
      <div className="sessions-list-div">  
        {/* <h2> Sessions List </h2> */}
        <ul className='sessions-list' aria-live='assertive'>
          {list}
        </ul>
      </div>  
      );
  }
}


const mapStateToProps = (state) => {
  return ({
    sessions: state.session.sessions
  });
}

export default connect(mapStateToProps)(SessionsList);