import {withRouter} from 'react-router'

const Logout = props => {
  localStorage.removeItem('token')
  props.history.push('/login')
  return null
}

export default withRouter(Logout)