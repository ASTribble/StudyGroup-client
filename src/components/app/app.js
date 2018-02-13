

import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

import GroupPage from '../group-page';
import SessionDetail from '../session-detail/session-detail';



export function App (props){

      return (
        <div> 
          <Route exact path='/' component={GroupPage}/>
          <Route exact path='/session' component={SessionDetail}/>
        </div>  
      );
}

export default connect()(App)