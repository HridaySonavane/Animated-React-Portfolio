import React, { useRef } from "react";
import { motion } from "framer-motion";

const variants = {
	initial: {
		x: -500,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 1,
			staggerChildren: 0.1,
		},
	},
	buttonChange: {
		scale: 1.08,
		backgroundColor: "rgba(12, 12, 29, 1)",
		color: "rgb(255, 255, 255)",
		transition: {
			duration: 0.1,
		},
	},
	mainButtonChange: {
		scale: 1.08,
		transition: {
			duration: 0.1,
		},
	},
};

function Services() {
	const ref = useRef();

	return (
		<motion.div
			className="bg-gradient-to-b from-primary to-[#111132] h-full flex flex-col justify-between"
			initial={"initial"}
			ref={ref}
			whileInView={"animate"}
		>
			<motion.div
				className="textContainer flex-[1] self-end flex items-center gap-5"
				initial={{ x: 500, opacity: 0 }}
				animate={{
					x: 0,
					opacity: 1,
					transition: {
						duration: 1,
						staggerChildren: 0.1,
					},
				}}
			>
				<p className="font-extralight text-sm text-[#808080] text-right">
					I focus on helping brand grow
					<br /> and move forward
				</p>
				<hr className="w-[240px] border-t-[0.5px] border-solid border-y-[#808080]" />
			</motion.div>
			<motion.div
				className="titleContainer flex-[2] flex flex-col items-center gap-1"
				variants={variants}
			>
				<div className="title">
					<img
						className="w-[240px] h-[75px] rounded-[50px] object-cover"
						src="/people.webp"
						alt=""
					/>
					<h1>
						<motion.b
							whileHover={{ color: "rgba(255, 165, 0, 1)" }}
						>
							Unique
						</motion.b>{" "}
						Ideas
					</h1>
				</div>
				<div className="title">
					<h1>
						<motion.b
							whileHover={{ color: "rgba(255, 165, 0, 1)" }}
						>
							For Your
						</motion.b>{" "}
						Business.
					</h1>
					<motion.button
						className="w-[200px] h-[63px] rounded-[50px] bg-[#FFA500] border-none text-base text-black cursor-pointer"
						variants={variants}
						whileHover={"mainButtonChange"}
						whileTap={{ scale: 0.9 }}
					>
						WHAT WE DO?
					</motion.button>
				</div>
			</motion.div>
			<motion.div
				className="listContainer flex-[2] flex max-w-5xl m-auto mb-8"
				variants={variants}
			>
				<motion.div
					className="box"
					whileHover={{
						backgroundColor: "rgba(211, 211, 211, 1)",
						color: "rgba(0, 0, 0, 1)",
					}}
				>
					<h2>Branding</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Numquam tempora quisquam neque earum, nemo nam rerum
						pariatur aut hic voluptates molestiae quod impedit sequi
						error quibusdam, amet soluta quia et?
					</p>
					<motion.button
						variants={variants}
						whileHover={"buttonChange"}
						whileTap={{ scale: 0.9 }}
					>
						Go
					</motion.button>
				</motion.div>
				<motion.div
					className="box"
					whileHover={{
						backgroundColor: "rgba(211, 211, 211, 1)",
						color: "rgba(0, 0, 0, 1)",
					}}
				>
					<h2>Branding</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Numquam tempora quisquam neque earum, nemo nam rerum
						pariatur aut hic voluptates molestiae quod impedit sequi
						error quibusdam, amet soluta quia et?
					</p>
					<motion.button
						variants={variants}
						whileHover={"buttonChange"}
						whileTap={{ scale: 0.9 }}
					>
						Go
					</motion.button>
				</motion.div>
				<motion.div
					className="box"
					whileHover={{
						backgroundColor: "rgba(211, 211, 211, 1)",
						color: "rgba(0, 0, 0, 1)",
					}}
				>
					<h2>Branding</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Numquam tempora quisquam neque earum, nemo nam rerum
						pariatur aut hic voluptates molestiae quod impedit sequi
						error quibusdam, amet soluta quia et?
					</p>
					<motion.button
						variants={variants}
						whileHover={"buttonChange"}
						whileTap={{ scale: 0.9 }}
					>
						Go
					</motion.button>
				</motion.div>
				<motion.div
					className="box"
					whileHover={{
						backgroundColor: "rgba(211, 211, 211, 1)",
						color: "rgba(0, 0, 0, 1)",
					}}
				>
					<h2>Branding</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Numquam tempora quisquam neque earum, nemo nam rerum
						pariatur aut hic voluptates molestiae quod impedit sequi
						error quibusdam, amet soluta quia et?
					</p>
					<motion.button
						variants={variants}
						whileHover={"buttonChange"}
						whileTap={{ scale: 0.9 }}
					>
						Go
					</motion.button>
				</motion.div>
			</motion.div>
		</motion.div>
	);
}

export default Services;
