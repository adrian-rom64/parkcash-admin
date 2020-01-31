import React from 'react'
import Asset from '../Components/Asset'

const Users = () => {

  const name = 'Users'
  const tableHeaders = [
    {header: 'id', item: 'id'},
    {header: 'Name', item: 'name'},
    {header: 'Stuff', item: 'stuff'},
    {header: 'Registered', item: 'created_at'}
  ]
  const foo = async () => {
    return [
      {id: 1, name: 'Adrian', stuff: 'placki', created_at: '23.04.2019'},
      {id: 2, name: 'Monika', stuff: 'szpadel', created_at: '23.04.2069'},
      {id: 3, name: 'Artur', stuff: 'hehe', created_at: '25.04.2019'},
    ]
  }
  const formFields = [
    {name: 'Id', slug: 'id'},
    {name: 'Name', slug: 'name'},
    {name: 'Stuff', slug: 'stuff'},
    {name: 'Registered', slug: 'created_at'}
  ]

  return ( 
    <div className='users'>
      <Asset 
        name={name}
        tableHeaders={tableHeaders}
        requestAll={foo}
        formFields={formFields}
      />
    </div>
   )
}
 
export default Users