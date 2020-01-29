import React, { useState, useEffect, useRef } from 'react'
import {DataTable} from 'primereact/datatable'
import {Column} from 'primereact/column'

const IndexView = props => {

  const recordsData = [
    {id: 1, name: 'Adrian', stuff: 'placki', created_at: '23.04.2019'},
    {id: 2, name: 'Monika', stuff: 'szpadel', created_at: '23.04.2069'},
    {id: 3, name: 'Artur', stuff: 'hehe', created_at: '25.04.2019'},
  ]
  const records = recordsData.map(item => { return {...item, Edit: 'Edit', Delete: 'Delete'}})

  const deleteRecord = id => {
    console.log('Delete record', id)
  }
  const showRecord = id => {
    console.log('Show record', id)
  }
  const editRecord = id => {
    console.log('Edit record', id)
  }

  const dataColumns = props.tableHeaders.map(item => (
    <Column key={item.item} field={item.item} header={item.header} />
  ))
  const crudColumns = ['Edit', 'Delete'].map(item => (
    <Column key={item} field={item} header={item} />
  ))
  const columns = dataColumns.concat(crudColumns)

  
  return (
    <div className='index-view'>
      <DataTable value={records} resizableColumns={true} columnResizeMode='fit'>
        {columns}
      </DataTable>
    </div>
   )
}
 
export default IndexView