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
			<ul className='navbar'>
				<Navitem curPage={this.props.page} onclick={this.onClick} page='root' pageTitle='Root' externalSite='http://l.clardy.eu/' />
				<Navitem curPage={this.props.page} onclick={this.onClick} page='main' pageTitle='Main' />
				<Navitem curPage={this.props.page} onclick={this.onClick} page='page2' pageTitle='Page 2' />
				<Navitem curPage={this.props.page} onclick={this.onClick} page='cv' pageTitle='CV' externalSite='https://clardy.eu/markus/' />
				<Navitem curPage={this.props.page} onclick={this.onClick} page='shorturl' pageTitle='URL Shortener' externalSite='http://l.clardy.eu/url/' />
				<Navitem curPage={this.props.page} onclick={this.onClick} page='shorturl' pageTitle='Test Form' externalSite='http://l.clardy.eu/form/' />
				<NavDropdown />
			</ul>);
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
		if(this.props.externalSite !== '') {
			console.log(this.props.externalSite);
			window.location.replace(this.props.externalSite);
			return;
		}
		console.log(e.target.id);
		this.props.onclick(e.target.id);
	}

	render () {
		var className = 'navitem';
		if(this.props.curPage == this.props.page) className += ' active'
		return <li className={className} id={this.props.page} onClick={this.onClick}>{this.props.pageTitle}</li>;
	}
}

Navitem.defaultProps = {
	page: 'main',
	pageTitle: 'Main',
	curPage: 'main',
	externalSite: ''
}

class NavDropdown extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			image: '/static/imgs/menu.png',
			alt: '='
		};
		this.onHover = this.onHover.bind(this);
	}

	onHover (e) {
		this.setState({
			image: '/static/imgs/menu-hover.png',
			alt: '--'
		});
	}

	render () {
		return <li className='navDropdown'><img src={this.state.image} alt={this.state.alt} height='50px' width='50px' /></li>;
	}
}

export default Navbar;