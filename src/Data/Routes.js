import Users from '../Views/Users'
import Logout from '../Views/Logout'
import Devices from '../Views/Devices'

export default [
  {path: '/logout', exact: true, component: Logout},
  {path: '/devices', exact: true, component: Devices},
  {path: '/users', exact: true, component: Users},
]

