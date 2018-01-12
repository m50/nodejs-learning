import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';


ReactDOM.render(
	<App />,
	document.getElementById('root')
);

$("react-toolbar").on("click", () => {
	event.preventDefault();
	let url = $(this).attr('href');
	window.history.replaceState("", "Blog", url);
});
