import React from 'react';
import {connect} from 'react-redux';
import LocationTag from './location-tag';
import SessionNotes from './session-notes';
import NameList from './name-list';
import HomeNav from '../home-nav/home-nav';
import {getSessionById} from '../../actions/get-sessions';


export class SessionDetail extends React.Component{

    componentDidMount(){
        this.props.dispatch(getSessionById(this.props.id));
      }
   
   render(){
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
