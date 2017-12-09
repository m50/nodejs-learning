import React from 'react';

class Navbar extends React.Component {
	constructor (props) {
		super(props);
		this.onClick = this.onClick.bind(this);
	}

	onClick (text) {
		this.props.onclick(text);
	}

	render () {
		var navbar = (
			<nav className='navitems'>
				<Navitem curPage={this.props.page} onclick={this.onClick} page='main' pageTitle='Main' />
				<Navitem curPage={this.props.page} onclick={this.onClick} page='page2' pageTitle='Page 2' />
			</nav>);
		return navbar;
	}
}

Navbar.defaultProps = {
	page: 'main'
};

class Navitem extends React.Component {
	constructor (props) {
		super(props);
		this.onClick = this.onClick.bind(this);
	}

	onClick (e) {
		console.log(e.target.id);
		this.props.onclick(e.target.id);
	}

	render () {
		const navitemStyle = { cursor: 'pointer' };
		var className = 'navitem';
		if(this.props.curPage == this.props.page) className += ' active'
		return <span style={navitemStyle} className={className} id={this.props.page} onClick={this.onClick}>{this.props.pageTitle}</span>;
	}
}

Navitem.defaultProps = {
	page: 'main',
	pageTitle: 'Main',
	curPage: 'main'
}

export default Navbar;