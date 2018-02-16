import React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {updateSessionField, makeDeletedField} from '../../actions/update-fields';
import {makeOptions} from '../../actions/helper-functions';

export class DeleteNameForm extends React.Component {
  


    onSubmit(field){
        const names = makeDeletedField(field, this.props.session);
        this.props.dispatch(updateSessionField(names, this.props.id));
        this.props.reset();
    }

    render(){
        return(
            <form 
                className='form' 
                id='delete-name-form' 
                onSubmit={this.props.handleSubmit((value)=> this.onSubmit(value))}
            >
                <label htmlFor='name-to-delete'>Delete name:</label>
                <Field
                    component='select'
                    type='select'
                    id='name-to-delete'
                    name='nameToDelete'
                >
                    <option></option>
                    {makeOptions(this.props.names)}
                </Field>
                <button id='delete-field'>Delete</button>   
            </form>
        )
    }
}

const mapStateToProps = state => {
    return ({
        id: state.session.detailedSession.id,
        session: state.session.detailedSession,
        names: state.session.detailedSession.attendees
    });
};

export default reduxForm({
    form:'deleteName'
})(connect(mapStateToProps)(DeleteNameForm));