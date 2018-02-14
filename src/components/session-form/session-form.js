import React from 'react';
import { connect } from 'react-redux';
import Input from './input';
import {Field, reduxForm, focus } from 'redux-form';
import {addSession} from '../../actions/add-session';


export class SessionForm extends React.Component {
  
  onSubmit(values){
    console.log(values);
    // addSessionAPI(values);
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
          name='start'
          id='start-time'
          validate={[]}
          label='Start Time'
        />

        {/* <Field
          component={Input}
          element='input'
          type='radio'
          value='am'
          name='startAm'
          id='start-am-pm'
          validate={[]}
          label='am'
        />

        <Field
          component={Input}
          element='input'
          type='radio'
          value='pm'
          name='startPM'
          id='start-am-pm'
          validate={[]}
          label='pm'
        /> */}


        <Field
          component={Input}
          element='input'
          type='text'
          max='2'
          name='end'
          id='end-time'
          validate={[]}
          label='End Time'
        />

        {/* <Field
          component={Input}
          element='input'
          type='radio'
          value='am'
          name='endAm'
          id='end-am-pm'
          validate={[]}
          label='am'
        />

        <Field
          component={Input}
          element='input'
          type='radio'
          value='pm'
          name='endPM'
          id='end-am-pm'
          validate={[]}
          label='pm'
        /> */}

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
          name='notes1'
          id='session-notes'
          validate={[]}
          label='Notes'
        />

        <Field
          component={Input}
          element='input'
          type='text'
          name='notes2'
          id='session-notes-2'
          validate={[]}
          label='Notes'
        />

        <Field
          component={Input}
          element='input'
          type='text'
          name='notes3'
          id='session-notes-3'
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