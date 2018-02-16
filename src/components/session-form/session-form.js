import React from 'react';
import { connect } from 'react-redux';
import Input from './input';
import {Field, reduxForm} from 'redux-form';
import {addSession} from '../../actions/add-session';
import {required, notEmpty} from '../validators';


export class SessionForm extends React.Component {
  
  onSubmit(values){
    console.log('going in SessionForm:', values)
    this.props.dispatch(addSession(values));
    this.props.reset();
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
          validate={[required, notEmpty]}
          label='Your Name:'
        />
        <section className='date-time'>
          <Field
            component={Input}
            element='input'
            type='date'
            name='date'
            id='date'
            validate={[required, notEmpty]}
            label='Date of Session'
          />

          <Field
            component={Input}
            element='input'
            type='text'
            name='start'
            id='start-time'
            placeholder= '3:15 pm'
            validate={[required, notEmpty]}
            label='Start Time'
          />

          <Field
            component={Input}
            element='input'
            type='text'
            name='end'
            id='end-time'
            placeholder='5:00 pm'
            validate={[required, notEmpty]}
            label='End Time'
          />
        </section>
        <Field
          component={Input}
          element='input'
          type='text'
          name='location'
          id='location'
          validate={[required, notEmpty]}
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
  })(connect()(SessionForm));

  	
// Cory Mickelson	6:15 PM
// new Date("2018-02-12")
// array.sort(function(a,b){
//   // Turn your strings into dates, and then subtract them
//   // to get a value that is either negative, positive, or zero.
//   return new Date(b.date) - new Date(a.date);
// });