import React from 'react';
import {connect} from 'react-redux';

export function LocationsBar (props){
  return (
  <section className='locations-bar'>  
    <h2> Locations </h2>
    <a href='#'> All Locations </a>
  </section>  
  )
}

export default connect()(LocationsBar);