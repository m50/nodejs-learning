import React from 'react';


class Content extends React.Component {
   render() {
      return (
         <div>
            <h2>Content</h2>
            <p>The content text!!!</p>
         </div>
      );
   }
}

class App extends React.Component {
	render () {
		return (<div id='body'>
					<p>This is a another test!</p>
					<p>Just updating</p>
					<p>This is a test of seperating my jsx files</p>
					<Content />
				</div>);
	}
}


export default App;