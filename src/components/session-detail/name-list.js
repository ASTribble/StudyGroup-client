import React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import AddNameForm from './add-name-form';

export function NameList (props){

    const nameList = props.names.map((name, index) => {
        return <li key={index} className='name-list-item'>{name}</li>
    });

    return (
        <div>
            <ul className='name-list'>
                {nameList}
            </ul>  
            <AddNameForm />
        </div>   
    );
};

const mapStateToProps = state => ({
    names: state.session.detailedSession.attendees
});

export default connect(mapStateToProps)(NameList);