import React from 'react';

class Posts extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			posts: [],
			postid: -1
		};
		this.headerClick = this.headerClick.bind(this);
		this.postnavClick = this.postnavClick.bind(this);
		this.reloadPage = this.reloadPage.bind(this);
	}

	reloadPage(id) {
		let page = '';
		if(!isNaN(id) && id > 0) {
			page = '/'+id;
		}
		$.getJSON('/blog/api'+page, (data) => {
			const posts = data.posts.map(post => (
				<div key={post.id} id={'post_'+post.id} className='post'>
					<div className='postheader' onClick={ () => { this.headerClick(post.id); } } val={post.id}>
						<h3 className='posttitle'>{post.title}</h3>
						<span className='postdate'>Post Date: {post.date.split('.')[0].split('T').reverse().join(' ')}</span>
					</div>
					<div className='postcontent' dangerouslySetInnerHTML={{ __html: post.post.replace(/\<script.*?\>|\<\/script\>/g, '') }}></div>
				</div>
				));
			this.setState({ posts: posts, postid: id });
		});
	}

	headerClick (id) {
		let page = '/blog/posts/'+id;
		if(id == -1) page = '/blog/posts';
		window.history.replaceState({}, "Blog", page);
		this.reloadPage(id);
	}

	postnavClick (id) {
		let page = '/blog/posts/'+id;
		if(id == -1) page = '/blog/posts';
		window.history.replaceState({}, "Blog", page);
		this.reloadPage(id);
	}

	componentDidMount() {
		const id = this.state.postid;
		this.reloadPage(id);
	}

	render () {
		let postnav = <div className='blogNav'></div>;
		const id = this.state.postid;
		console.log(id);
		if(!isNaN(id) && id > 0) {
			let nextPage = id+1;
			let prevPage = id-1;
			if(isNaN(prevPage) || prevPage == 0) {
				prevPage = '';
			}
			if(isNaN(nextPage) || nextPage == 0) {
				nextPage = '';
			}
			// this.postnavClick(prevPage)
			// this.postnavClick(nextPage)
			postnav = (
				<div className='blogNav'>
					<a onClick={console.log(prevPage)} className='postnav' href={"/blog/posts/"+prevPage}>◀</a>
					<a onClick={console.log(nextPage)} className='postnav fr' href={"/blog/posts/"+nextPage}>▶</a>
				</div>
				);
		}
		return (
			<div id='Blog'>
				<br />
				{postnav}
				{this.state.posts}
			</div>
			);
	}
}

export default Posts;