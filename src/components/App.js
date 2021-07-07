import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "../scss/app.scss";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MobileNav from "./MobileNav";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import ReviewForm from "./pages/Reviews";
import Template from "./pages/Template";
import Projects from "./pages/Projects";
import Error from "./pages/Error";

function App() {
	return (
		<div className="wrapper w-100">
			<Router>
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route exact path="/projects" component={Projects} />
					<Route path="/services" component={Services} />
					<Route path="/Template" component={Template} />
					<Route path="/contact#contactForm" component={Contact} />
					<Route exact path="/contact" component={Contact} />
					<Route path="/reviews" component={ReviewForm} />
					<Route exact path="/home/:id" childern={<Template />}>
						<Template />
					</Route>
					<Route exact path="/services/:id" childern={<Template />}>
						<Template />
					</Route>
					{/* Handle relevant projects paths */}
					<Route exact path={"/projects/:id"} children={<Template />}>
						<Template />
					</Route>
					<Route path="*" component={Error} />
				</Switch>
				{/* <!-- Mobile bar hidden on 450px screens and up --> */}
				<MobileNav />
				<Footer />
			</Router>
		</div>
	);
}

export default App;
