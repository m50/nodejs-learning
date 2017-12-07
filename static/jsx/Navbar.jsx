import React from 'react';

class Navbar extends React.Component {
	constructor (props) {
		super(props);
		this.onClick = this.onClick.bind(this);
	}

	onClick (e) {
		console.log(e.target.value);
		this.props.onclick(e.target.value);
	}

	render () {
		const navbar = (
			<ul className='navbar'>
				<li className='navitem current' value='main' onClick={this.onClick}>Main</li>
				<li className='navitem' value='page2' onClick={this.onClick}>Page 2</li>
			</ul>);
		return navbar;
	}
}

Navbar.defaultProps = {
	page: 'main'
};

export default Navbar;