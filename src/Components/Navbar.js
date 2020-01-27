import React from 'react'
import '../Styles/Navbar.css'
import {Button} from 'primereact/button'
import PropTypes from 'prop-types'

const Navbar = props => {
	return (
		<React.Fragment>
			<div className='navbar'>
				<div className='navbar-left'>
					<div className='navbar-logo'>{global.tr('app-name')}</div>
				</div>
				<div className='navbar-right'>
					<div className='navbar-buttons'>
						{props.loggedIn ? <Button label={global.tr('logout')} className='p-button-secondary'/> : <Button label={global.tr('login')} />}
					</div>
				</div>
			</div>
			<div style={{width: '100%', height: '50px'}}></div>
		</React.Fragment>

	)
}

Navbar.propTypes = {
	loggedIn: PropTypes.bool
}

export default Navbar