import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

export const Hero = () => {
	const titleRef = useRef<HTMLHeadingElement>(null);
	const videoRef = useRef<HTMLVideoElement>(null);
	// const videoTimelineRef = useRef<gsap.core.Timeline>(null);

	const isMobile = useMediaQuery({ maxWidth: 767 });

	useGSAP(() => {
		const heroSplit = SplitText.create(titleRef.current, {
			type: "chars, words",
		});

		const paragraphSplit = SplitText.create(".subtitle", {
			type: "lines",
		});

		heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

		// Title text animation
		gsap.from(heroSplit.chars, {
			yPercent: 100,
			duration: 1.8,
			ease: "expo.out",
			stagger: 0.06,
		});

		// Paragraphs text animations
		gsap.from(paragraphSplit.lines, {
			opacity: 0,
			yPercent: 100,
			duration: 1.8,
			ease: "expo.out",
			stagger: 0.06,
			delay: 1,
		});

		// Leaf animation
		gsap
			.timeline({
				scrollTrigger: {
					trigger: "#hero",
					start: "top top",
					end: "bottom top",
					scrub: 0.5,
				},
			})
			.to(".right-leaf", { y: 200 }, 0)
			.to(".left-leaf", { y: -200 }, 0);

		const startValue = isMobile ? "top 50%" : "center 60%";
		const endValue = isMobile ? "120% top" : "bottom top";

		// Video animation timeline
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: videoRef.current,
				start: startValue,
				end: endValue,
				scrub: true,
				pin: true,
			},
		});

		if (videoRef.current) {
			videoRef.current.onloadedmetadata = () => {
				tl.to(videoRef.current, {
					currentTime: videoRef.current?.duration,
				});
			};
		}
	});

	return (
		<>
			<section id="hero" className="noisy">
				<h1 ref={titleRef} className="title">
					MOJITO
				</h1>

				<img
					src="/images/hero-left-leaf.png"
					alt="Left Leaf"
					className="left-leaf"
				/>

				<img
					src="/images/hero-right-leaf.png"
					alt="Right Leaf"
					className="right-leaf"
				/>

				<div className="body">
					<div className="content">
						<div className="space-y-5 hidden md:block">
							<p>Cool. Crisp. Classic.</p>
							<p className="subtitle">
								Sip the Spirit <br /> of Summer
							</p>
						</div>

						<div className="view-cocktails">
							<p className="subtitle">
								Every cocktail on our menu is a blend of premium ingredients,
								creative flair, and timeless recipes - designed to delight your
								senses.
							</p>
							<a href="#cocktails">View Cocktails</a>
						</div>
					</div>
				</div>
			</section>

			<div className="video absolute inset-0">
				<video
					ref={videoRef}
					src="/videos/output.mp4"
					muted
					playsInline
					preload="auto"
				/>
			</div>
		</>
	);
};
