import React from 'react';
import {connect} from 'react-redux';
import LocationTag from './location-tag';
import SessionNotes from './session-notes';
import NameList from './name-list';
import HomeNav from '../home-nav/home-nav';

import {getSessionById} from '../../actions/get-sessions';
import {deleteSessionById} from '../../actions/delete-sessions';
import {makeTime} from '../../actions/helper-functions';


export class SessionDetail extends React.Component{

    componentDidMount(){
        this.props.dispatch(getSessionById(this.props.id));
      }

    deleteSession(e){
        e.preventDefault();
        this.props.dispatch(deleteSessionById(this.props.id))
            .then(() => this.props.history.push('/'));
    }  
   
   render(){
       
       console.log(makeTime(this.props.session.startTime));

        return (
            <div>
                <HomeNav />
                <header>
                    <h2>{this.props.session.date}</h2>
                    <p>{this.props.session.startTime} to {this.props.session.endTime}</p>
                </header>
                < LocationTag />
                < SessionNotes />
                < NameList />
                <div id='delete-button-div'>
                    <button className='delete-button' onClick={(e)=>this.deleteSession(e)}> Delete Session </button>
                </div>
            </div>    
        )
    }    
}

const mapStateToProps = (state, props) => {
    return ({
        session: state.session.detailedSession,
        id: props.match.params.sessionID
    })
}

export default connect(mapStateToProps)(SessionDetail);
