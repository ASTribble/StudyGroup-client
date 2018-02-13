import React from 'react';
import { connect } from 'react-redux';
import Input from './input';
import {Field, reduxForm, focus } from 'redux-form';


export class SessionForm extends React.Component {
  
  onSubmit(values){
    console.log(values);
  }

  render(){
    return (
      <form 
        className='add-session-form' 
        name='add-session-form'
        id='add-session-form'
        onSubmit={this.props.handleSubmit(values =>
          this.onSubmit(values))}
      >
        <h2> Add Session </h2>

        <Field 
          component={Input}
          element='input'
          type='text'
          name='name'
          id='name'
          validate={[]}
          label='Your Name:'
        />

        <Field
          component={Input}
          element='input'
          type='date'
          name='date'
          id='date'
          validate={[]}
          label='Date of Session'
        />

        <Field
          component={Input}
          element='input'
          type='text'
          name='start-time'
          id='start-time'
          validate={[]}
          label='Start Time'
        />

        <Field
          component={Input}
          element='input'
          type='radio'
          value='am'
          name='start-am-pm'
          id='start-am'
          validate={[]}
          label='am'
        />

        <Field
          component={Input}
          element='input'
          type='radio'
          value='pm'
          name='start-am-pm'
          id='start-pm'
          validate={[]}
          label='pm'
        />


        <Field
          component={Input}
          element='input'
          type='text'
          max='2'
          name='end-time'
          id='end-time'
          validate={[]}
          label='End Time'
        />

        <Field
          component={Input}
          element='input'
          type='radio'
          value='am'
          name='end-am-pm'
          id='end-am'
          validate={[]}
          label='am'
        />

        <Field
          component={Input}
          element='input'
          type='radio'
          value='pm'
          name='end-am-pm'
          id='end-pm'
          validate={[]}
          label='pm'
        />

        <Field
          component={Input}
          element='input'
          type='text'
          name='location'
          id='location'
          validate={[]}
          label='Location'
        />

        <Field
          component={Input}
          element='input'
          type='text'
          name='session-notes'
          id='session-notes'
          validate={[]}
          label='Notes'
        />

        <button disabled={this.props.pristine || this.props.submitting}>
          Submit
        </button>
      </form>
      );
    };
  }

  export default reduxForm({
    form: 'session'
  })(SessionForm);