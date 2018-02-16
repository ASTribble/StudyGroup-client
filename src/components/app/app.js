

import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch, withRouter} from 'react-router-dom';

import GroupPage from '../group-page/group-page';
import SessionDetail from '../session-detail/session-detail';



export function App (props){

      return (
        <div>
          <Switch> 
            <Route exact path='/' component={GroupPage}/>
            <Route exact path='/sessions/:sessionID' component={SessionDetail}/>
          </Switch>
        </div>  
      );
}

export default withRouter(connect()(App));