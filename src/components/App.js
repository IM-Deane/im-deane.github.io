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
import Template from "./pages/Template";
import Projects from "./pages/Projects";
import Error from "./pages/Error";

function App() {
	return (
		<div className="wrapper w-100">
			<Router>
				<Navbar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/about">
						<About />
					</Route>
					<Route exact path="/projects">
						<Projects />
					</Route>
					<Route path="/services">
						<Services />
					</Route>
					<Route path="/Template">
						<Template />
					</Route>
					<Route path="/contact#contactForm">
						<Contact />
					</Route>
					<Route exact path="/contact">
						<Contact />
					</Route>
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

					<Route path="*">
						<Error />
					</Route>
				</Switch>
				{/* <!-- Mobile bar hidden on 450px screens and up --> */}
				<MobileNav />
				<Footer />
			</Router>
		</div>
	);
}

export default App;
