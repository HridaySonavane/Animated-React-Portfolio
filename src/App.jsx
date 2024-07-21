import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Parallax from "./components/Parallax";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
	return (
		<div>
			<section id="Homepage">
				<Navbar />
				<Hero />
			</section>
			<section id="Services">
				<Parallax type="services" />
			</section>
			<section>
				<Services />
			</section>
			<section id="Portfolio">
				<Parallax type="portfolio" />
			</section>
			{/* <section>Portfolio1</section>
			<section>Portfolio2</section>
			<section>Portfolio3</section> */}
			<Portfolio />
			<section id="Contact">
				<Contact />
			</section>
		</div>
	);
}

export default App;
