import React, { useState, useEffect } from 'react'
import {Column} from 'primereact/column'
import {DataTable} from 'primereact/datatable'
import Api from '../Api'

const Users = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await Api.get('/users')
      if (res.code === 200) {
        setUsers(res.data.users)
      } else {
        alert('error')
      }
    }
    fetchUsers()
  }, [])

  return ( 
    <div className='users'>
      <DataTable value={users} responsive>
        <Column field='email' header={global.tr('table-header-email')}/>
        <Column field='role' header={global.tr('table-header-role')}/>
        <Column field='balance' header={global.tr('table-header-balance')}/>
        <Column field='asset_balance' header={global.tr('table-header-assets')}/>
      </DataTable>
    </div>
   )
}
 
export default Users