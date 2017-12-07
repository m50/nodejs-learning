import React from 'react';

class Navbar extends React.Component {
	constructor (props) {
		super(props);
		this.onClick = this.onClick.bind(this);
	}

	onClick (e) {
		console.log(e.target.id);
		this.props.onclick(e.target.id);
	}

	render () {
		var navbar = (
			<ul className='navbar'>
				<li className={this.props.page == 'main' ? 'navitem current' : 'navitem'} id='main' onClick={this.onClick}>Main</li>
				<li className={this.props.page == 'page2' ? 'navitem current' : 'navitem'} id='page2' onClick={this.onClick}>Page 2</li>
			</ul>);
		return navbar;
	}
}

Navbar.defaultProps = {
	page: 'main'
};

export default Navbar;