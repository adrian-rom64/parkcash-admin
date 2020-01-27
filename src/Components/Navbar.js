import React from 'react'
import '../Styles/Navbar.css'
import {Button} from 'primereact/button'
import PropTypes from 'prop-types'

const Navbar = props => {
	return (
		<React.Fragment>
			<div className='navbar'>
				<div className='navbar-left'>
					<div className='navbar-logo'>Blockchaincars</div>
				</div>
				<div className='navbar-right'>
					<div className='navbar-buttons'>
						{props.loggedIn ? <Button label='Log out' className='p-button-secondary'/> : <Button label='Log in' />}
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