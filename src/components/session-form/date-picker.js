import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import './date-picker.css';

const renderDatePicker = ({ input, placeholder, defaultValue, meta: { touched, error } }) => (
  <div>
    <DatePicker 
      {...input} 
      selected={input.value ? moment(input.value) : null}
      showTimeSelect
      timeIntervals={15}
      dateFormat='lll'
      timeCaption='Time' />
    {touched && error && <span>{error}</span>}
  </div>
);

export default renderDatePicker