import React from 'react';

class Posts extends React.Component {
	constructor (props) {
		super(props);
		let id = window.location.pathname.substring(12);
		if(isNaN(id)) {
			id = -1;
		}
		this.state = {
			posts: [],
			postid: id,
			maxid: -1
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
					<div className='postcontent' dangerouslySetInnerHTML={{ 
						__html: post.post.replace(/\<script.*?\>|\<\/script\>/g, '').replace(/\bon\w+\s*=/g, 'defang=')
					}}></div>
				</div>
				));
			let maxid = this.state.maxid;
			if(data.posts.length > 1)
				maxid = data.posts.length - 1;
			this.setState({ posts: posts, postid: id, maxid: maxid });
		});
	}

	headerClick (id) {
		let page = '/blog/posts/'+id;
		if(id == -1) page = '/blog/posts';
		window.history.replaceState({}, "Blog", page);
		this.reloadPage(id);
	}

	postnavClick (id, e) {
		e.preventDefault();
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
		if(!isNaN(id) && id > 0) {
			let nextPage = id+1;
			let prevPage = id-1;
			if(isNaN(prevPage) || prevPage == 0) {
				prevPage = '';
			}
			if(isNaN(nextPage) || nextPage > this.state.maxid) {
				nextPage = '';
			}
			postnav = (
				<div className='blogNav'>
					<a onClick={(e) => {this.postnavClick(prevPage, e)}} className='postnav' href={"/blog/posts/"+prevPage}>◀</a>&nbsp;&nbsp;
					<a onClick={(e) => {this.postnavClick(nextPage, e)}} className='postnav' href={"/blog/posts/"+nextPage}>▶</a>
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