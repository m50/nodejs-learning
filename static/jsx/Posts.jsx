import React from 'react';

class Posts extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			posts: []
		};
	}
	componentDidMount() {
		const id = this.props.id;
		if(id > 0) {
			$.getJSON('/blog/posts/'+id, (data) => {
				console.log(data);
				const posts = data.posts.map(post => (
					<div id={'post_'+post.id}>
						<h3>{post.title}</h3>
						<p>Post Date: {post.date}</p>
						<p>{post.post}</p>
					</div>
					));
				this.setState({ posts: posts });
			});
		} else {
			$.getJSON('/blog/posts', (data) => {
				console.log(data);
				const posts = data.posts.map(post => (
					<div id={'post_'+post.id} class='post'>
						<div class='postheader'>
							<h3 class='posttitle'>{post.title}</h3>
							<p class='postdate'>Post Date: {post.date}</p>
						</div>
						<p class='postcontent'>{post.post}</p>
					</div>
					));
				this.setState({ posts: posts });
			});
		}
	}

	render () {
		return (
			<div id='Blog'>
				<h2>Blog</h2>
				{this.state.posts}
			</div>
			);
	}
}

export default Posts;