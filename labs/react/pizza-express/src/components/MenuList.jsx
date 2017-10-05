import React, { Component } from 'react';
import MenuItem from './MenuItem';
import items from '../pizzaData';

class MenuList extends Component{
   render(){
      return (
         <div className="menu">
            <h1>Menu</h1>
            <div id='menu' className="menu-container">
               {
                  items.map((item, index)=>{
                     return <MenuItem key={index} name={item.name} price={item.price} description={item.description} image={item.image}/>
                  })
               }
            </div>
         </div>
      )
   }
}

export default MenuList;