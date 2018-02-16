import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import moment from 'moment';
import {deleteSessionById} from '../../actions/delete-sessions';


export class SessionsList extends React.Component {

  render() {

  const filteredList = (this.props.sessions.filter(s => s.startTime < moment().format()));
    console.log('filteredList', filteredList);

  if(filteredList.length > 0){
    filteredList.map(session => this.props.dispatch(deleteSessionById(session.id)))
  }

  const list = this.props.sessions
    .sort((a, b) => a.startTime > b.startTime)
    .map((session) => {
         return(
            <li key={session.id} className='session-list-item' id={session.id} >
              <Link to={`/sessions/${session.id}`}>
               <h3>{moment(session.startTime).format('dddd MM Do YYYY')}</h3>
               <p>{moment(session.startTime).format('LT')} - {moment(session.endTime).format('LT')} </p>
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
}

const mapStateToProps = (state) => {
  return ({
    sessions: state.session.sessions
  });
}

export default connect(mapStateToProps)(SessionsList);