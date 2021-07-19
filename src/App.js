import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./scss/app.scss";
import Navbar from "./components/nav-bar.component";
import Footer from "./components/footer.component";
import MobileNav from "./components/mobile-nav.component";

import Spinner from "react-bootstrap/Spinner";

// Pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const Projects = lazy(() => import("./pages/Projects"));
const ProjectPage = lazy(() => import("./pages/ProjectPage"));
// Error
const Error = lazy(() => import("./pages/Error"));

function App() {
	return (
		<div className="wrapper w-100">
			<Router>
				<Navbar />
				<Switch>
					<Suspense fallback={<Spinner />}>
						<Route exact path="/" component={Home} />
						<Route path="/about" component={About} />
						<Route exact path="/projects" component={Projects} />
						<Route path="/services" component={Services} />
						<Route path="/Template" component={ProjectPage} />
						<Route path="/contact#contactForm" component={Contact} />
						<Route exact path="/contact" component={Contact} />
						<Route exact path="/home/:id" childern={<ProjectPage />}>
							<ProjectPage />
						</Route>
						<Route exact path="/services/:id" childern={<ProjectPage />}>
							<ProjectPage />
						</Route>
						{/* Handle relevant projects paths */}
						<Route exact path={"/projects/:id"} children={<ProjectPage />}>
							<ProjectPage />
						</Route>
					</Suspense>
					<Route path="/*" component={Error} />
				</Switch>
				{/* <!-- Mobile bar hidden on 450px screens and up --> */}
				<MobileNav />
				<Footer />
			</Router>
		</div>
	);
}

export default App;
