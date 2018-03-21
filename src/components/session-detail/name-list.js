import React from 'react';
import {connect} from 'react-redux';
import AddNameForm from './add-name-form';
import DeleteNameForm from './delete-name-form';

export function NameList (props){

    const nameList = props.names.map((name, index) => {
        return <li key={index} className='name-list-item'>{name}</li>
    });

    return (
        <div id='name-list-div'>
            <h3>Attendees:</h3>
            <ul className='name-list'> 
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