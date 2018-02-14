

import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect, Switch, withRouter} from 'react-router-dom';

import GroupPage from '../group-page/group-page';
import SessionDetail from '../session-detail/session-detail';



export function App (props){

      return (
        <div>
          <Redirect from='/' to='/studyGroup'/>
          <Switch> 
            <Route exact path='/studyGroup' component={GroupPage}/>
            <Route exact path='/sessions/:sessionID' component={SessionDetail}/>
          </Switch>
        </div>  
      );
}

export default withRouter(connect()(App));