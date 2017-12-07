import React from 'react';

class Content extends React.Component {
	render() {
		var body = <div id='body'></div>;

		if(this.props.page=='main') {
			body = (
				<div id='body'>
					<h2>Main</h2>
					<p>The content text!!!</p>
					<p>This is a another test!</p>
					<p>Just updating</p>
					<p>This is a test of seperating my jsx files</p>
				</div>
				);
		} else if(this.props.page=='page2') {
			body = (
				<div id='body'>
					<h2>Second Page</h2>
					<p>Other content text!!!</p>
				</div>
				);
		}

		return body;
	}
}

Content.defaultProps = {
	page: 'main'
}

export default Navbar;