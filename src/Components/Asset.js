import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {TabMenu} from 'primereact/tabmenu'
import IndexView from './IndexView'
import '../Styles/Asset.css'

const Asset = props => {

  const [view, setView] = useState('index')

  const menuitems = [
    {label: 'Index'},
    {label: 'Show'},
    {label: 'Edit'},
    {label: 'New'}
  ]

  return ( 
    <div className='asset'>
      <h2>{props.name}</h2>
      <TabMenu model={menuitems} />
      <br />
      <IndexView 
        tableHeaders={props.tableHeaders}
        requestAll={props.requestAll}
      />
    </div>
   )
}

Asset.propTypes = {
  name: PropTypes.string,
  tableHeaders: PropTypes.array,
  tableItems: PropTypes.array,
  requestAll: PropTypes.func
}

export default Asset