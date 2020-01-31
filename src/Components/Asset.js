import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {TabMenu} from 'primereact/tabmenu'
import IndexView from './IndexView'
import '../Styles/Asset.css'
import Loading from './Loading'
import Form from './Form'
import $ from 'jquery'

const Asset = props => {

  const [loading, setLoading] = useState(false)
  const [activeItem, setActiveItem] = useState({label: 'Index', className: 'active-tab'})

  const menuItems = [
    {label: 'Index'},
    {label: 'Show', disabled: true},
    {label: 'Edit', disabled: true},
    {label: 'New'}
  ]

  const setTab = path => {
    setActiveItem({label: path})
  }



  const views = {
    Index: (
      <IndexView 
        tableHeaders={props.tableHeaders}
        requestAll={props.requestAll}
        setTab={setTab}
      />
    ),
    Edit: (
      <Form 
        formFields={props.formFields}
        edit={true}
      />
    ),
    Show: (
      <Form 
        formFields={props.formFields}
        edit={false}
      />
    ),
    New: (
      <Form 
        formFields={props.formFields}
        edit={true}
      />
    )
  }

  return ( 
    <div className='asset'>
      {loading ? <Loading /> : null}
      <h2>{props.name}</h2>
      <TabMenu model={menuItems} activeItem={activeItem} onTabChange={e => setTab(e.value.label)} />
      <br />
      {views[activeItem.label]}
    </div>
   )
}

Asset.propTypes = {
  name: PropTypes.string,
  tableHeaders: PropTypes.array,
  requestAll: PropTypes.func,
  formFields: PropTypes.array
}

export default Asset