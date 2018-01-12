import React from 'react';

class Navitem extends React.Component {
	constructor (props) {
		super(props);
		this.onClick = this.onClick.bind(this);
	}

	onClick (e) {
		e.preventDefault();
		let url = e.target.href;
		console.log("react-toolbar click - "+url);
		window.history.replaceState({}, "Blog", url);
		this.props.onclick(e.target.id);
	}

	render () {
		const navitemStyle = { cursor: 'pointer' };
		let className = 'navitem react-toolbar';
		if(this.props.curPage == this.props.page) {
			className += ' active';
		}
		return <a href={'/blog/'+this.props.page} style={navitemStyle} className={className} id={this.props.page} onClick={this.onClick}>{this.props.pageTitle}</a>;
	}
}

Navitem.defaultProps = {
	page: 'main',
	pageTitle: 'Main',
	curPage: 'main'
}

export default Navitem;