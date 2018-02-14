import React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';

export class AddNameForm extends React.Component {
  onSubmit(name){
    console.log(name);
    // this.props.dispatch(addName(name));
  }
  render(){
      return(
          <form className='form' id='add-note-form' onSubmit={this.props.handleSubmit((value)=>this.onSubmit(value))}>
          <label htmlFor='add-name-input'>Are you going?</label>
            <Field
                component='input'
                type='text'
                id='add-name-input'
                name='name'
                placeholder='add your name'
            />
            <button id='add-name-button'>I'm Going!</button>   
          </form>

      )
  }
}

export default reduxForm({
    form:'name'
})(connect()(AddNameForm));