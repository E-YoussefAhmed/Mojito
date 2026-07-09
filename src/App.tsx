import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

const App = () => {
	return (
		<div className="flex-center h-screen">
			<h1 className="text-3xl text-indigo-300">Hello, GSAP!</h1>
		</div>
	);
};
export default App;
