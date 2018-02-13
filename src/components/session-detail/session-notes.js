import React from 'react';
import {connect} from 'react-redux';

export function SessionNotes (props){

    const notes = props.notes.map((note, index) => {
        return <li key={index} className='session-note'>{note}</li>
    });

    return (
        <ul className='session-notes'>
            {notes}
        </ul> 
    );
};

const mapStateToProps = state => {
    console.log(state.session.detailedSession);
    return({
        notes: state.session.detailedSession.notes
    });    
};

export default connect(mapStateToProps)(SessionNotes)