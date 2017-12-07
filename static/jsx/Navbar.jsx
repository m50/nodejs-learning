import React from 'react';

class Navbar extends React.Component {
	constructor (props) {
		super(props);
		this.onClick = this.onClick.bind(this);
	}

	onClick (e) {
		this.props.onclick(e.target.value);
	}

	render () {
		const navbar = (
			<ul class='navbar'>
				<li class='navitem' value='main'>Main</li>
				<li class='navitem' value='page2'>Page 2</li>
			</ul>);
	}
}

Navbar.defaultProps = {
	page: 'main'
}

export default Navbar;