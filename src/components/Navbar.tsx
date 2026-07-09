import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

import { navLinks } from "../constants";

export const Navbar = () => {
	const navRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		const navTween = gsap.timeline({
			scrollTrigger: {
				trigger: navRef.current,
				start: "bottom top",
			},
		});

		navTween.fromTo(
			navRef.current,
			{
				backgroundColor: "transparent",
			},
			{
				backgroundColor: "#00000050",
				backgroundFilter: "blur(10px)",
				backdropFilter: "blur(10px)",
				// filter: "blur(10px)",
				duration: 1,
				ease: "power1.inOut",
			},
		);
	});

	return (
		<nav ref={navRef}>
			<div>
				<a href="#hero" className="flex items-center gap-2">
					<img src="/images/logo.png" alt="logo" />
					<p>Velvet Pour</p>
				</a>

				<ul>
					{navLinks.map((link) => (
						<li key={link.id}>
							<a href={`#${link.id}`}>{link.title}</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};
