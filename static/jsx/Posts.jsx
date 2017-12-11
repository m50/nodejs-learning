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
		var page = '';
		if(id > 0) {
			page = '/'+id;
		}
		$.getJSON('/blog/posts'+page, (data) => {
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

	componentDidUpdate() {
		$('.postheader').on('click', () => {
			console.log($(this).parent().attr('key'));
			window.location.replace('/blog/'+$(this).parent().attr('key'))
		});
	}

	render () {
		var lastSection = <div className='blogNav'></div>;
		if(this.props.id > 0) {
			const nextPage = parseInt(this.props.id)+1;
			const prevPage = parseInt(this.props.id)-1;
			lastSection = (
				<div className='blogNav'>
					<a href={"/blog/"+prevPage}>&lt;</a>
					<a className='fr' href={"/blog/"+nextPage}>&gt;</a>
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