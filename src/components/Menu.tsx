import { Link } from "react-router-dom";

import "./Menu.scss";

const Menu = () => {

	const year = new Date().getFullYear();

	return	(
		<div className="Menu">
			<section className="main">
				<h1>Solar system</h1>
				<nav>
					<ul>
						<li>
							<div>
								<Link to="/model">Explore solar system</Link>
							</div>
						</li>
						<li>
							<div>
								<Link to="/about">About</Link>
							</div>
						</li>
					</ul>
				</nav>
			</section>
			<p className="fotter-text" >Copyright &copy; {year} Michał Wiczk</p>
		</div>
	)
}

export default Menu;
