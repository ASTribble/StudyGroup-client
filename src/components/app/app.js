

import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';

import GroupPage from '../group-page/group-page';
import SessionDetail from '../session-detail/session-detail';



export function App (props){

      return (
        <div>
          <Switch>   
            <Route exact path='/studyGroup' component={GroupPage}/>
            <Route exact path='/sessions/:sessionID' component={SessionDetail}/>
            </Switch>
        </div>  
      );
}

export default connect()(App)