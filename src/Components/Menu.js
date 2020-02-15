import React from 'react'
import {withRouter} from 'react-router'
import '../Styles/Menu.css'
import {Menu} from 'primereact/menu'

const SideMenu = props => {

  const goto = path => props.history.push(path)

  const items = [
    {
      label: global.tr('menu-assets'),
      items: [
        {label: global.tr('menu-users'), command: () => goto('/users')},
        {label: global.tr('menu-devices'), command: () => goto('/devices')}
      ]
    },
    {
      label: global.tr('menu-account'),
      items: [
        {label: global.tr('menu-logout'), command: () => goto('/logout')}
      ]
    }
  ]

  return ( 
    <div className='menu'>
      <Menu model={items} />
    </div>
   )
}

export default withRouter(SideMenu)