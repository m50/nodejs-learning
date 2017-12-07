import React from 'react';
import Navbar from './Navbar.jsx'
import Content from './Content.jsx'

class App extends React.Component {
	constructor (props) {
		super(props);
		this.state = {page: 'main'};

		this.onNavbar = this.onNavbar.bind(this)
	}
	onNavbar (newPage) {
		this.setState({ page: newPage });
	}
	render () {
		const App = (
			<div>
				<Navbar onclick={onNavbar} page={this.state.page} />
				<Content page={this.state.page} />
			</div>
			);
		return App;
	}
}

export default App;