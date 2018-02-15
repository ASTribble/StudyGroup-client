import React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';

import {updateSessionField, makeUpdateField} from '../../actions/update-fields';

export class AddNameForm extends React.Component {
    
  onSubmit(name){
    const names = makeUpdateField(name, this.props.session); 
    this.props.dispatch(updateSessionField(names, this.props.id));
    this.props.reset();
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

const mapStateToProps = state => ({
    session: state.session.detailedSession,
    id: state.session.detailedSession.id  
});

export default reduxForm({
    form:'name'
})(connect(mapStateToProps)(AddNameForm));