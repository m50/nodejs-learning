import React from 'react';
import Navbar from './Navbar.jsx';
import Navitem from './Navitem.jsx';
import Posts from './Posts.jsx';
import Wiki from './Wiki.jsx';

class App extends React.Component {
	constructor (props) {
		super(props);
		this.state = {page: 'posts'};

		this.onNavbar = this.onNavbar.bind(this);
	}

	onNavbar(page) {
		this.setState({ page: page });
	}

	render() {
		var content = <div />;
		if(this.state.page=='posts') {
			const postNumber = $('#post-id').val();
			if(postNumber < 1) window.location.replace('/blog');
			content = <Posts id={postNumber} />;
		} else if(this.state.page=='wiki') {
			content = <Wiki />;
		}
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