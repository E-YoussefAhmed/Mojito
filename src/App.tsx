import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Cocktails } from "./components/Cocktails";
import { About } from "./components/About";
import { Art } from "./components/Art";
import { Menu } from "./components/Menu";
import Contact from "./components/Contact";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

// ScrollSmoother.create({
// 	smooth: 1,
// 	effects: true,
// });

const App = () => {
	return (
		<main>
			<Navbar />
			<Hero />
			<Cocktails />
			<About />
			<Art />
			<Menu />
			<Contact />
			{/* <div className="h-screen bg-black"></div> */}
		</main>
	);
};
export default App;
