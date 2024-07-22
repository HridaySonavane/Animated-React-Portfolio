import React, { useState } from "react";
import ToggleButton from "./ToggleButton";
import { motion } from "framer-motion";
import Links from "./Links";

const variants = {
	open: {
		clipPath: "circle(1200px at 50px 50px)",
		transition: {
			type: "spring",
			stiffness: 20,
		},
	},
	closed: {
		clipPath: "circle(27px at 50px 50px)",
		transition: {
			delay: 0.5,
			type: "spring",
			stiffness: 400,
			damping: 40,
		},
	},
};

function Sidebar() {
	const [open, setOpen] = useState(false);

	return (
		// sidebar
		<motion.div
			initial={"closed"}
			animate={open ? "open" : "closed"}
			className="sidebar flex flex-col items-center justify-center bg-white text-black "
		>
			{/* bg */}
			<motion.div
				variants={variants}
				className="bg fixed top-0 left-0 bottom-0 w-[300px] bg-white z-30 mobile:w-[400px]"
			>
				<Links />
			</motion.div>
			<ToggleButton setOpen={setOpen} />
		</motion.div>
	);
}

export default Sidebar;
