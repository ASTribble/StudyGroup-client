import React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';

export class AddNoteForm extends React.Component {
  onSubmit(note){
    console.log(note);
    // this.props.dispatch(addName(name));
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
            />
            <button id='add-note-button'>Add</button>   
        </form>

      )
  }
}

export default reduxForm({
    form:'note'
})(connect()(AddNoteForm));