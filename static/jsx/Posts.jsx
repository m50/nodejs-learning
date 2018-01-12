import React from 'react';

class Posts extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			posts: []
		};
	}

	headerClick (id) {
		let page = '/blog/posts/'+id;
		if(id == -1) page = '/blog/posts';
		window.location.replace(page);
	}

	componentDidMount() {
		const id = parseInt(window.location.pathname.substring(12));
		let style = {};
		let page = '';
		if(!isNaN(id) && id > 0) {
			page = '/'+id;
			style={ display: "inline-block" };
		}
		$.getJSON('/blog/api'+page, (data) => {
			const posts = data.posts.map(post => (
				<div style={style} key={post.id} id={'post_'+post.id} className='post'>
					<div className='postheader' onClick={ () => { this.headerClick(post.id); } } val={post.id}>
						<h3 className='posttitle'>{post.title}</h3>
						<span className='postdate'>Post Date: {post.date.split('.')[0].split('T').reverse().join(' ')}</span>
					</div>
					<div className='postcontent' dangerouslySetInnerHTML={{ __html: post.post.replace(/\<script.*?\>|\<\/script\>/g, '') }}></div>
				</div>
				));
			this.setState({ posts: posts });
		});
	}

	render () {
		let postnav = <div className='blogNav'></div>;
		const id = parseInt(window.location.pathname.substring(12));
		if(!isNaN(id) && id > 0) {
			let nextPage = id+1;
			let prevPage = id-1;
			if(isNaN(prevPage) || prevPage == 0) {
				prevPage = '';
			}
			if(isNaN(nextPage) || nextPage == 0) {
				nextPage = '';
			}
			postnav = (
				<div className='blogNav'>
					<a className='postnav' href={"/blog/posts/"+prevPage}>◀</a>
					(this.state.posts)
					<a className='postnav fr' href={"/blog/posts/"+nextPage}>▶</a>
				</div>
				);
		}
		return (
			<div id='Blog'>
				<br />
				{postnav}
				{!isNaN(id) && id > 0 ? '' : this.state.posts}
			</div>
			);
	}
}

export default Posts;