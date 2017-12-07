import React from 'react';

class Navbar extends React.Component {
	constructor (props) {
		super(props);
		this.onClick = this.onClick.bind(this);
		this.burgerToggle = this.burgerToggle.bind(this);
	}

	onClick (text) {
		this.props.onclick(text);
	}

	burgerToggle () {
		let linksEl = document.querySelector('.narrowLinks');
		if (linksEl.style.display === 'block') {
			linksEl.style.display = 'none';
		} else {
			linksEl.style.display = 'block';
		}
	}

	render () {
		var navbar = (
			<nav className='navbar'>
				<div className='navWide'>
					<div className='wideDiv'>
						<Navitem curPage={this.props.page} onclick={this.onClick} page='root' pageTitle='Root' externalSite='http://l.clardy.eu/' />
						<Navitem curPage={this.props.page} onclick={this.onClick} page='main' pageTitle='Main' />
						<Navitem curPage={this.props.page} onclick={this.onClick} page='page2' pageTitle='Page 2' />
						<Navitem curPage={this.props.page} onclick={this.onClick} page='cv' pageTitle='CV' externalSite='https://clardy.eu/markus/' />
						<Navitem curPage={this.props.page} onclick={this.onClick} page='shorturl' pageTitle='URL Shortener' externalSite='http://l.clardy.eu/url/' />
						<Navitem curPage={this.props.page} onclick={this.onClick} page='shorturl' pageTitle='Test Form' externalSite='http://l.clardy.eu/form/' />
					</div>
				</div>
				<div className='navNarrow'>
					<i className="fa fa-bars fa-2x"></i>
					<div className='narrowLinks'>
						<Navitem curPage={this.props.page} onclick={this.onClick} page='root' pageTitle='Root' externalSite='http://l.clardy.eu/' />
						<Navitem curPage={this.props.page} onclick={this.onClick} page='main' pageTitle='Main' />
						<Navitem curPage={this.props.page} onclick={this.onClick} page='page2' pageTitle='Page 2' />
						<Navitem curPage={this.props.page} onclick={this.onClick} page='cv' pageTitle='CV' externalSite='https://clardy.eu/markus/' />
						<Navitem curPage={this.props.page} onclick={this.onClick} page='shorturl' pageTitle='URL Shortener' externalSite='http://l.clardy.eu/url/' />
						<Navitem curPage={this.props.page} onclick={this.onClick} page='shorturl' pageTitle='Test Form' externalSite='http://l.clardy.eu/form/' />
					</div>
				</div>
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
		return <span className={className} id={this.props.page} onClick={this.onClick}>{this.props.pageTitle}</span>;
	}
}

Navitem.defaultProps = {
	page: 'main',
	pageTitle: 'Main',
	curPage: 'main',
	externalSite: ''
}

export default Navbar;