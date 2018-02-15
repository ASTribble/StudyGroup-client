import React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {updateSessionField, makeUpdateField} from '../../actions/update-fields';


export class AddNoteForm extends React.Component {
  
    onSubmit(note){
        const notes = makeUpdateField(note, this.props.session);
        this.props.dispatch(updateSessionField(notes, this.props.id));
        this.props.reset();
    }

    render(){
        return(
            <form 
                className='form' 
                id='add-note-form' 
                onSubmit={this.props.handleSubmit((value)=> this.onSubmit(value))}
            >
                <label htmlFor='add-note-input'>Add a note:</label>
                <Field
                    component='input'
                    type='text'
                    id='add-note-input'
                    name='note'
                    placeholder='add your note'
                />
                <button id='add-note-button'>Add</button>   
            </form>
        )
    }
}

const mapStateToProps = state => {
    return ({
        id: state.session.detailedSession.id,
        session: state.session.detailedSession
    
    });
};

export default reduxForm({
    form:'note'
})(connect(mapStateToProps)(AddNoteForm));