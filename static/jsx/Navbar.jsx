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
				<li class='navitem' value='main' onClick={this.onClick}>Main</li>
				<li class='navitem' value='page2' onClick={this.onClick}>Page 2</li>
			</ul>);
		return navbar;
	}
}

Navbar.defaultProps = {
	page: 'main'
};

export default Navbar;