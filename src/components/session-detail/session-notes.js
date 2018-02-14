import React from 'react';
import {connect} from 'react-redux';
import AddNoteForm from './add-note-form';

export function SessionNotes (props){

    const notes = props.notes.map((note, index) => {
        return <li key={index} className='session-note'>{note}</li>
    });

    return (
        <section className='notes-section'>
            <ul className='session-notes'>
                {notes}
            </ul> 
            <AddNoteForm />
        </section> 
    );
};

const mapStateToProps = state => {
    console.log(state.session.detailedSession);
    return({
        notes: state.session.detailedSession.notes
    });    
};

export default connect(mapStateToProps)(SessionNotes)