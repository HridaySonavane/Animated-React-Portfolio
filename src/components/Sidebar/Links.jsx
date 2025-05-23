import React from "react";
import { motion } from "framer-motion";

const variants = {
	open: {
		transition: {
			staggerChildren: 0.1,
		},
	},
	closed: {
		transition: {
			staggerChildren: 0.05,
			staggerDirection: -1,
		},
	},
};

const itemVariants = {
	open: {
		y: 0,
		opacity: 1,
	},
	closed: {
		y: 50,
		opacity: 0,
	},
};

function Links() {
	const items = ["Homepage", "Services", "Portfolio", "Contact"];

	return (
		<motion.div
			className="links absolute h-full w-full flex flex-col justify-center items-center gap-5 z-20 "
			variants={variants}
		>
			{items.map((item) => (
				<motion.a
					href={`/#${item}`}
					key={item}
					variants={itemVariants}
					whileHover={{
						scale: 1.1,
						textShadow: "0px 12px 10px rgba(0, 0, 0, 0.5)",
					}}
					whileTap={{ scale: 0.95 }}
				>
					{item}
				</motion.a>
			))}
		</motion.div>
	);
}

export default Links;
