import React, { Component } from 'react';
import './CmpSayHello.css';

class CmpSayHello extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return <h1 className="inf">Hello from component</h1>;
	}
}

export default CmpSayHello;
