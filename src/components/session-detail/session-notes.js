import React from 'react';
import {connect} from 'react-redux';
import AddNoteForm from './add-note-form';
import DeleteNoteForm from './delete-note-form';

export function SessionNotes (props){

    const notes = props.notes.map((note, index) => {
        return <li key={index} className='session-note session-detail-list-item'>{note}</li>
    });

    return (
        <section className='notes-section session-detail-section'>
            <h2>About this Session</h2>
            
            <ul className='session-notes session-detail-list' aria-live='assertive'>
                {notes}
            </ul> 
            <AddNoteForm />
            <DeleteNoteForm />
        </section> 
    );
};

const mapStateToProps = state => {
    return({
        notes: state.session.detailedSession.notes
    });    
};

export default connect(mapStateToProps)(SessionNotes)