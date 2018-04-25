import React from 'react';
import {connect} from 'react-redux';
import AddNameForm from './add-name-form';
import DeleteNameForm from './delete-name-form';


export function NameList (props){

    const nameList = props.names.map((name, index) => {
        return <li key={index} className='name-list-item session-detail-list-item'>{name}</li>
    });

    return (
        <div id='name-list-div' className='session-detail-section'>
            <h2>Attendees</h2>
            <ul className='name-list session-detail-list' aria-live='assertive'> 
                {nameList}
            </ul>  
            <AddNameForm />
            <DeleteNameForm />
        </div>   
    );
};

const mapStateToProps = state => ({
    names: state.session.detailedSession.attendees
});

export default connect(mapStateToProps)(NameList);