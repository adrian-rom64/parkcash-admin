import React, { useState, useEffect } from 'react'
import {Column} from 'primereact/column'
import {DataTable} from 'primereact/datatable'
import Api from '../Api'

const Devices = () => {

  const [devices, setDevices] = useState([])

  useEffect(() => {
    const fetchdevices = async () => {
      const res = await Api.get('/devices/all')
      if (res.code === 200) {
        setDevices(res.data.devices)
      } else {
        alert('error')
      }
    }
    fetchdevices()
  }, [])

  return ( 
    <div className='devices'>
      <DataTable value={devices} responsive>
        <Column field='name' header={global.tr('devices-table-name')}/>
        <Column field='role' header={global.tr('devices-table-connected')}/>
        <Column field='price' header={global.tr('devices-table-price')}/>
        <Column field='updated_at' header={global.tr('devices-table-updated-at')}/>
      </DataTable>
    </div>
   )
}
 
export default Devices