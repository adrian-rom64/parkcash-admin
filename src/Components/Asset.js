import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {TabMenu} from 'primereact/tabmenu'
import IndexView from './IndexView'
import '../Styles/Asset.css'
import Loading from './Loading'

const Asset = props => {

  const [view, setView] = useState('index')
  const [loading, setLoading] = useState(true)

  const menuItems = [
    {label: 'Index'},
    {label: 'Show', disabled: true},
    {label: 'Edit', disabled: true},
    {label: 'New'}
  ]

  return ( 
    <div className='asset'>
      {loading ? <Loading /> : null}
      <h2>{props.name}</h2>
      <TabMenu model={menuItems} />
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
  requestAll: PropTypes.func
}

export default Asset