import React, { Fragment } from 'react'
import ItemList from './ItemList';
 function ItemlistContainer() {
  return (

    <Fragment>

      <span className=' md:flex md:justify-center md:mb-[50vh]'>
        <br/><br/><br/><br/><br/>
       
        <ItemList/> 
      </span>

    </Fragment>
    
  )
}

export default ItemlistContainer;
