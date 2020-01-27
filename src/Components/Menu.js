import React from 'react'
import {Tree} from 'primereact/tree'
import data from '../Data/MenuData'
import '../Styles/Menu.css'

const Menu = () => {
  return ( 
    <div className='menu'>
      <Tree value={data}/>
    </div>
   )
}
 
export default Menu