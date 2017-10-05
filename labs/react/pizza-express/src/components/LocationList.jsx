import React, { Component } from 'react';
import Location from './Location';
import locations from '../locationData';

class LocationList extends Component{
   render(){
      return (
         <div id="locations">
            <h1>Locations :</h1>
            <div className="locations">
               {
                  locations.map((location, index)=>{
                     return <Location key={index} name={location.name} address={location.address} phone={location.phone}/>
                  })
               }
            </div>
         </div>
      )
   }
}

export default LocationList;