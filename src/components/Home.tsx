import React from "react";

import './Home.scss'
import HomePlanet from "./HomePlanet";
import Menu from "./Menu";

const Home = () => 
	<div className="Home">
		<Menu/>
		<HomePlanet/>
	</div>

export default Home;
