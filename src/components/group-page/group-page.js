import React from 'react';
import {connect} from 'react-redux';

import SessionForm from '../session-form/session-form';
import SessionsList from '../sessions-list/sessions-list';
import {getSessions} from '../../actions/get-sessions';

import './group-page.css';


export class GroupPage extends React.Component{


    componentDidMount(){
      this.props.dispatch(getSessions());
    }

    render(){
      let loading;
      if(this.props.loading){
        loading = <div> Loading... </div>
      }
      return (
        <div className='page'>  
          <header role='banner'>
            <h1 className='flex center'>Study Group</h1>
            <div className='flex center'>
              <p className='center'>
                Join a Session or Add Your Own!
              </p>
            </div>
       
          </header>
          {loading}
          <main>
            < SessionForm className='add-session' />
            < SessionsList className='sessions-list'/>
          </main>
         </div>  
      );
    };  
}

const mapStateToProps = (state) => ({
  loading: state.session.loading
})
export default connect(mapStateToProps)(GroupPage)