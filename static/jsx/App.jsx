import React from 'react';
import Navbar from './Navbar.jsx';
import Navitem from './Navitem.jsx';
import Posts from './Posts.jsx';
import Wiki from './Wiki.jsx';

class App extends React.Component {
	constructor (props) {
		super(props);
		this.state = {page: window.location.pathname.match(/blog\/([^\/]+)/)[1]};

		this.onNavbar = this.onNavbar.bind(this);
	}

	onNavbar(page) {
		this.setState({ page: page });
	}

	// componentDidUpdate() {
	// 	console.log("componentDidUpdate");
	// 	$(".react-toolbar").on("click", (event) => {
	// 		console.log("react-toolbar click");
	// 		event.preventDefault();
	// 		let url = $(this).attr('href');
	// 		window.history.replaceState("", "Blog", url);
	// 	});
	// }

	componentDidMount() {
		console.log("componentDidUpdate");
		$(".react-toolbar").on("click", (event) => {
			event.preventDefault();
			let url = $(this).attr('href');
			console.log("react-toolbar click - "+url);
			window.history.replaceState("sdafsdf", "Blog", url);
		});
	}

	render() {
		var content = <div />;
		if(this.state.page=='posts') {
			content = <Posts />;
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