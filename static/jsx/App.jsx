import React from 'react';
import Navbar from './Navbar.jsx';
import Navitem from './Navitem.jsx';

class App extends React.Component {
	constructor (props) {
		super(props);
		this.state = {page: 'main'};

		this.onNavbar = this.onNavbar.bind(this);
	}

	onNavbar(page) {
		this.setState({ page: page });
	}

	render() {
		var content = <div></div>;

		if(this.state.page=='main') {
			content = (
				<div>
					<h2>Main</h2>
					<p>The content text!!!</p>
				</div>
				);
		} else if(this.state.page=='page2') {
			content = (
				<div>
					<h2>Second Page</h2>
					<p>Other content text!!!</p>
				</div>
				);
		}
		var body = (<div id='body'>
						<Navbar page={this.state.page}>
							<Navitem curPage={this.state.page} onclick={this.onNavbar} page='main' pageTitle='Test Page 1' />
							<Navitem curPage={this.state.page} onclick={this.onNavbar} page='page2' pageTitle='Test Page 2' />
						</Navbar>
						{content}
					</div>);

		return body;
	}
}

export default App;