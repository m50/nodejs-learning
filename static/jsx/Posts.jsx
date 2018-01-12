import React from 'react';

class Posts extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			posts: []
		};
	}

	headerClick (id) {
		let page = '/blog/'+id;
		if(id == -1) page = '/blog';
		window.location.replace(page);
	}

	componentDidMount() {
		const id = parseInt(window.location.pathname.substring(6));
		let page = '';
		if(!isNaN(id) && id > 0) {
			page = '/'+id;
		}
		$.getJSON('/blog/posts'+page, (data) => {
			const posts = data.posts.map(post => (
				<div key={post.id} id={'post_'+post.id} className='post'>
					<div className='postheader' onClick={ () => { this.headerClick(post.id); } } val={post.id}>
						<h3 className='posttitle'>{post.title}</h3>
						<span className='postdate'>Post Date: {post.date.split('.')[0].split('T').reverse().join(' ')}</span>
					</div>
					<div className='postcontent' dangerouslySetInnerHTML={{ __html: post.post }}></div>
				</div>
				));
			this.setState({ posts: posts });
		});
		
	}

	render () {
		let lastSection = <div className='blogNav'></div>;
		const id = parseInt(window.location.pathname.substring(6));
		if(!isNaN(id) && id > 0) {
			let nextPage = parseInt(this.props.id)+1;
			console.log(nextPage);
			let prevPage = parseInt(this.props.id)-1;
			console.log(prevPage);
			if(isNaN(prevPage) || prevPage == 0) {
				prevPage = '';
			}
			if(isNaN(nextPage) || nextPage == 0) {
				nextPage = '';
			}
			lastSection = (
				<div className='blogNav'>
					<a href={"/blog/"+prevPage}>&lt;</a>
					<a className='fr' href={"/blog/"+nextPage}>&gt;</a>
				</div>
				);
		}
		return (
			<div id='Blog'>
				<br />
				{this.state.posts}
				{lastSection}
			</div>
			);
	}
}

export default Posts;