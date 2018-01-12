import React from 'react';
import Navbar from './Navbar.jsx';
import Navitem from './Navitem.jsx';
import Posts from './Posts.jsx';
import Wiki from './Wiki.jsx';

class App extends React.Component {
	constructor (props) {
		super(props);
		console.log(window.location.pathname.match(/blog\/([^\/])/)[0];
		this.state = {page: window.location.pathname.match(/blog\/([^\/])/)[0]};

		this.onNavbar = this.onNavbar.bind(this);
	}

	onNavbar(page) {
		this.setState({ page: page });
	}

	render() {
		var content = <div />;
		if(this.state.page=='posts') {
			content = <Posts />;
		} else if(this.state.page=='wiki') {
			content = <Wiki />;
		}
		console.log(this.state.page);
		var body = (<div id='body'>
						<Navbar page={this.state.page}>
							<Navitem curPage={this.state.page} onclick={this.onNavbar} page='posts' pageTitle='Posts' />
							<Navitem curPage={this.state.page} onclick={this.onNavbar} page='wiki' pageTitle='Wiki' />
						</Navbar>
						{content}
					</div>);

		return body;
	}
}

export default App;