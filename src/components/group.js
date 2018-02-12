import React from 'react';
import SessionForm from './session-form/session-form';
import SessionsList from './sessions-list/sessions-list';
import LocationsBar from './locations-bar/locations-bar';


function Group (props){

    return (
    <div>  
      <header>
          <h1>Study Group</h1>
      </header>
      <main>
        < SessionForm className='add-session' />
        < SessionsList className='sessions-list'/>
        < LocationsBar className='locations-bar'/>
      </main>
    </div>  
    )
}

export default Group