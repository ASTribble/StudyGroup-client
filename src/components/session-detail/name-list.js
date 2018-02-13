import React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';

export function NameList (props){

    const nameList = props.names.map((name, index) => {
        return <li key={index} className='name-list-item'>{name}</li>
    });

    return (
        <div>
            <ul className='name-list'>
                {nameList}
            </ul>  

            <form id='add-name-form' onSubmit={e=>props.handleSubmit(console.log(e.values))}>
                <label htmlFor='session-name-input'>Are you going?</label>
                <Field
                    component='input'
                    type='text'
                    name='session-name-input' 
                    id='session-name-input'
                />
                <button id='add-name-button'>
                    Going!
                </button>
            </form> 
        </div>   
    );
};

const mapStateToProps = state => ({
    names: state.session.detailedSession.attendees
});

export default reduxForm({
    form:'addName'
})(connect(mapStateToProps)(NameList));