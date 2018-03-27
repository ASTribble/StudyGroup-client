import React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {updateSessionField, makeDeletedField} from '../../actions/update-fields';
import {makeOptions} from '../../actions/helper-functions';


export class DeleteNoteForm extends React.Component {
  
    onSubmit(field){
        const notes = makeDeletedField(field, this.props.session);
        this.props.dispatch(updateSessionField(notes, this.props.id));
        this.props.reset();
    }

    render(){
        return(
            <form 
                className='form' 
                id='delete-note-form' 
                onSubmit={this.props.handleSubmit((value)=> this.onSubmit(value))}
            >
                <label htmlFor='note-to-delete'>Delete note:</label>
                <Field
                    component='select'
                    type='select'
                    id='note-to-delete'
                    name='noteToDelete'
                >
                    <option></option>
                    {makeOptions(this.props.notes)}
                </Field>
                <button id='delete-field'>Delete</button>   
            </form>
        )
    }
}

const mapStateToProps = state => {
    return ({
        id: state.session.detailedSession.id,
        session: state.session.detailedSession,
        notes: state.session.detailedSession.notes
    });
};

export default reduxForm({
    form:'deleteNote'
})(connect(mapStateToProps)(DeleteNoteForm));