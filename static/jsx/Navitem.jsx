import React from 'react';

class Navitem extends React.Component {
	constructor (props) {
		super(props);
		this.onClick = this.onClick.bind(this);
	}

	onClick (e) {
		this.props.onclick(e.target.id);
	}

	render () {
		const navitemStyle = { cursor: 'pointer' };
		let className = 'navitem';
		let onclick = this.onClick;
		if(this.props.curPage == this.props.page) {
			className += ' active';
			onclick = (e) => {};
		}
		return <a href={'/blog/'+this.props.page} style={navitemStyle} className={className} id={this.props.page} onClick={onclick}>{this.props.pageTitle}</a>;
	}
}

Navitem.defaultProps = {
	page: 'main',
	pageTitle: 'Main',
	curPage: 'main'
}

export default Navitem;