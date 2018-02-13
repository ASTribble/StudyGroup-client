import React from 'react';
import {connect} from 'react-redux';
import LocationTag from './location-tag';
import SessionNotes from './session-notes';
import NameList from './name-list';

export function SessionDetail(props){
    console.log('session detail props:', props);
    return (
        <div>
            <header>
                <h2>{props.session.date}</h2>
                <p>{props.session.startTime} to {props.session.endTime}</p>
            </header>
            < LocationTag />
            < SessionNotes />
            < NameList />
        </div>    



    )
}

const mapStateToProps = state => {
    return ({
        session: state.session.detailedSession
    })
}

export default connect(mapStateToProps)(SessionDetail);
