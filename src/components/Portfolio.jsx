import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

function Portfolio() {
	const item = [
		{
			id: 1,
			title: "React Commerce",
			img: "https://images.pexels.com/photos/26341034/pexels-photo-26341034/free-photo-of-a-view-of-a-canyon-with-a-river-running-through-it.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
			desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla ea quidem voluptatum sequi laboriosam, in nihil culpa similique architecto quos numquam at praesentium necessitatibus, exercitationem nostrum consectetur. Praesentium, voluptate quas.",
		},
		{
			id: 2,
			title: "Next.JS App",
			img: "https://images.pexels.com/photos/13770293/pexels-photo-13770293.png?auto=compress&cs=tinysrgb&w=600&lazy=load",
			desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla ea quidem voluptatum sequi laboriosam, in nihil culpa similique architecto quos numquam at praesentium necessitatibus, exercitationem nostrum consectetur. Praesentium, voluptate quas.",
		},
		{
			id: 3,
			title: "Banking App",
			img: "https://images.pexels.com/photos/25473496/pexels-photo-25473496/free-photo-of-a-dark-stairway-with-a-light-shining-on-it.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
			desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla ea quidem voluptatum sequi laboriosam, in nihil culpa similique architecto quos numquam at praesentium necessitatibus, exercitationem nostrum consectetur. Praesentium, voluptate quas.",
		},
		{
			id: 4,
			title: "Music App",
			img: "https://images.pexels.com/photos/26652844/pexels-photo-26652844/free-photo-of-a-sign-that-says-to-telescope-on-top-of-a-building.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
			desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla ea quidem voluptatum sequi laboriosam, in nihil culpa similique architecto quos numquam at praesentium necessitatibus, exercitationem nostrum consectetur. Praesentium, voluptate quas.",
		},
	];

	const Single = ({ item }) => {
		const ref = useRef();

		const { scrollYProgress } = useScroll({
			target: ref,
			// offset: ["start start", "end start"],
		});

		const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

		return (
			<section>
				<div className="Container flex justify-center items-center w-full h-full overflow-hidden">
					<div className="wrapper max-w-5xl h-full m-auto flex gap-[50px] justify-center items-center">
						<div className="imageContainer flex-1 h-1/2" ref={ref}>
							<img
								className="w-full h-full rounded-lg object-cover"
								src={item.img}
								alt=""
							/>
						</div>
						<motion.div
							style={{ y }}
							className="textContainer flex-1 flex flex-col gap-[30px]"
						>
							<h2 className="text-5xl font-bold leading-[1.875rem]">
								{item.title}
							</h2>
							<p className="text-[#808080] text-sm leading-4">
								{item.desc}
							</p>
							<motion.button
								className="bg-[#FFA500] border-none rounded-[8px] text-black text-xs p-[8px] w-[180px] leading-4"
								whileHover={{
									scale: 1.08,
									transition: {
										duration: 0.1,
									},
								}}
							>
								See Demo
							</motion.button>
						</motion.div>
					</div>
				</div>
			</section>
		);
	};

	const ref = useRef();

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["end end", "start start"],
	});

	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
	});

	return (
		<motion.div className="portfolio relative" ref={ref}>
			<motion.div className="progress sticky top-0 left-0 pt-8 text-center text-[#FFA500] text-4xl font-bold backdrop-blur-lg bg-gradient-to-b from-[rgba(0,0,0,1)] to-transparent z-10">
				<h1>Featured Works</h1>
				<motion.div
					style={{ scaleX }}
					className="progressBar h-[10px] mt-3 bg-white rounded-sm"
				></motion.div>
			</motion.div>
			{item.map((item) => (
				<Single item={item} key={item.id} />
			))}
		</motion.div>
	);
}

export default Portfolio;
