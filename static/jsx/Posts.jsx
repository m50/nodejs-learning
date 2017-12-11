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
					<div key={post.id} id={'post_'+post.id} className='post'>
						<div className='postheader'>
							<h3 className='posttitle'>{post.title}</h3>
							<span className='postdate'>Post Date: {post.date.split('T').join(' ').split('.')[0]}</span>
						</div>
						<div className='postcontent'>{post.post}</div>
						<div>I am testing insert <b>HTML</b>. Go to <a href='https://google.ie'>Google</a>.</div>
					</div>
					));
				this.setState({ posts: posts });
			});
		} else {
			$.getJSON('/blog/posts', (data) => {
				console.log(data);
				const posts = data.posts.map(post => (
					<div key={post.id} id={'post_'+post.id} className='post'>
						<div className='postheader'>
							<h3 className='posttitle'>{post.title}</h3>
							<span className='postdate'>Post Date: {post.date.split('T').join(' ').split('.')[0]}</span>
						</div>
						<div className='postcontent'>{post.post}</div>
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