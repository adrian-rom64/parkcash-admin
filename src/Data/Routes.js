import Users from '../Views/Users'

export default [
  {path: '/users/:id/edit', exact: true, component: null},
  {path: '/users/:id/delete', exact: true, component: null},
  {path: '/users/:id', exact: true, component: null},
  {path: '/users/new', exact: true, component: null},
  {path: '/users', exact: true, component: Users},
]

