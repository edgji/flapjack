import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '../dist/index';

class App extends React.Component { 
	render() {
		return <Button title="Hello World"/>;
	}
}

ReactDOM.render(<App/>, document.querySelector('#root'));
