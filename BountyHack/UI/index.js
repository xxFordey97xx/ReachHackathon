import React from 'react';
import AppViews from './views/AppViews';
import {renderDOM, renderView} from './views/render';
import './index.css';
import * as backend from './build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);

const {standardUnit} = reach;

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {view: 'ConnectAccount'};
	}
	async componentDidMount() {
		const acc = await reach.getDefaultAccount();
		
	}

	render() { return renderView(this, AppViews); }
}



renderDOM(<App />);