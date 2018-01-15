import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

if(window.location.pathname == '/blog' || window.location.pathname == '/blog/'){
	window.location.replace('/blog/posts');
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);