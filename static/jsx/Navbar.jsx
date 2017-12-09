import React from 'react';

class Navbar extends React.Component {
	constructor (props) {
		super(props);
	}

	render () {
		var navbar = (
			<nav className='navitems'>
				{this.props.children}
			</nav>);
		return navbar;
	}
}

Navbar.defaultProps = {
	page: 'main'
};

export default Navbar;