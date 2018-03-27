import React from 'react';
import {connect} from 'react-redux';
import AddNoteForm from './add-note-form';
import DeleteNoteForm from './delete-note-form';

export function SessionNotes (props){

    const notes = props.notes.map((note, index) => {
        return <li key={index} className='session-note'>{note}</li>
    });

    return (
        <section className='notes-section'>
            <h3>About this Session:</h3>
            
            <ul className='session-notes' aria-live='assertive'>
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