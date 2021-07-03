
import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";

import './App.scss';
import About from './components/About';
import Home from './components/Home';
import SolarSystem from './components/SolarSystem';

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/model">
						<SolarSystem />
					</Route>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
