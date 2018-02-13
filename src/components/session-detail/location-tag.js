import React from 'react';
import {connect} from 'react-redux';

export function LocationTag(props){
    
    return (
        <div className='location-tag'>{props.location}</div>
    );
};

const mapStateToProps= state => ({
    location: state.session.detailedSession.location
});

export default connect(mapStateToProps)(LocationTag);