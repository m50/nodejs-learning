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
		console.log(id);
		var page = '';
		if(id > 0) {
			page = '/'+id;
		}
		$.getJSON('/blog/posts'+page, (data) => {
			console.log(data);
			const posts = data.posts.map(post => (
				<div key={post.id} id={'post_'+post.id} className='post'>
					<div className='postheader'>
						<h3 className='posttitle'>{post.title}</h3>
						<span className='postdate'>Post Date: {post.date.split('T').join(' ').split('.')[0]}</span>
					</div>
					<div className='postcontent' dangerouslySetInnerHTML={{ __html: post.post }}></div>
				</div>
				));
			this.setState({ posts: posts });
		});
	}

	render () {
		var lastSection = <div className='blogNav'></div>;
		if(this.props.id > 0) {
			lastSection = (
				<div className='blogNav'>
					<a href={"/blog/"+(this.props.id - 1)}>&lt;</a>
					<a className='fr' href={"/blog/"+(this.props.id + 1)}>&gt;</a>
				</div>
				);
		}
		return (
			<div id='Blog'>
				<h2>Blog</h2>
				{this.state.posts}
				{lastSection}
			</div>
			);
	}
}

export default Posts;