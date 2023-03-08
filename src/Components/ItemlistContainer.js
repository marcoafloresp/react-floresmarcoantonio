import React, { Fragment } from 'react'
import ItemList from './ItemList';

 function ItemlistContainer(greeting) {
  return (
    <Fragment>
      <span className=' md:flex md:justify-center md:mb-[50vh]'>
        <ItemList/> 
      </span>
    </Fragment>
  )
}

export default ItemlistContainer;
