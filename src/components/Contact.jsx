import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

const variants = {
	initial: {
		y: 500,
		opacity: 0,
	},

	animate: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
			staggerChildren: 0.1,
		},
	},
};

function Contact() {
	const ref = useRef();
	const form = useRef();

	const isInView = useInView(ref, { margin: "-100px" });

	const [error, setError] = useState(false);
	const [success, setSuccess] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm("service_kqai6ec", "template_togd2bo", form.current, {
				publicKey: "ahJ932u02ulWcX5n0",
			})
			.then(
				() => {
					setSuccess(true);
				},
				(error) => {
					setError(true);
				}
			);
	};

	return (
		<motion.div
			ref={ref}
			className="h-full max-w-4xl m-auto flex items-center gap-[50px]"
			variants={variants}
			initial={"initial"}
			whileInView={"animate"}
		>
			<motion.div
				className="textContainer flex-1 flex flex-col gap-6 "
				variants={variants}
			>
				<motion.h1
					variants={variants}
					className="text-[60px] font-bold leading-[3.5rem]"
				>
					Let's work together
				</motion.h1>
				<motion.div variants={variants} className="item">
					<h2>Mail</h2>
					<span>hello@react.dev</span>
				</motion.div>
				<motion.div variants={variants} className="item">
					<h2>Address</h2>
					<span>Hello Street New York</span>
				</motion.div>
				<motion.div variants={variants} className="item">
					<h2>Phone</h2>
					<span>0123456789</span>
				</motion.div>
			</motion.div>
			<div className="formContainer flex-1 relative">
				<motion.div
					className="phoneSVG absolute m-auto stroke-[#FFA500] stroke-[0.2] z-[-1]"
					initial={{ opacity: 1 }}
					whileInView={{ opacity: 0 }}
					transition={{ duration: 1, delay: 3 }}
				>
					<svg
						width="100%"
						height="100%"
						viewBox="0 0 24 24"
						fill="none"
						version="1.1"
						id="svg3"
						sodipodi:docname="phone-calling-svgrepo-com.svg"
						inkscape:version="1.3.2 (091e20e, 2023-11-25, custom)"
						xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
						xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:svg="http://www.w3.org/2000/svg"
					>
						<defs id="defs3" />
						<sodipodi:namedview
							id="namedview3"
							pagecolor="#ffffff"
							bordercolor="#000000"
							borderopacity="0.25"
							inkscape:showpageshadow="2"
							inkscape:pageopacity="0.0"
							inkscape:pagecheckerboard="0"
							inkscape:deskcolor="#d1d1d1"
							inkscape:zoom="0.69208076"
							inkscape:cx="221.79492"
							inkscape:cy="283.9264"
							inkscape:window-width="1920"
							inkscape:window-height="1000"
							inkscape:window-x="-11"
							inkscape:window-y="-11"
							inkscape:window-maximized="1"
							inkscape:current-layer="svg3"
						/>
						<motion.path
							initial={{ pathLength: 0 }}
							animate={isInView && { pathLength: 1 }}
							transition={{ duration: 3 }}
							fillRule="evenodd"
							clipRule="evenodd"
							d="M 4.7177,3.0919 C 5.94388,1.80096 7.9721,2.04283 8.98569,3.47641 l 1.26101,1.78348 c 0.8107,1.14667 0.7422,2.74084 -0.2253,3.75951 L 9.7765,9.27719 C 9.77582,9.27897 9.7751,9.2809 9.77436,9.28299 9.76142,9.31935 9.7287,9.43513 9.7609,9.65489 c 0.06675,0.45551 0.4184,1.38121 1.8461,2.88431 1.4321,1.5077 2.3008,1.8631 2.7033,1.9285 0.1737,0.0282 0.2645,0.0037 0.2935,-0.0065 l 0.4086,-0.4302 c 0.8738,-0.92 2.2361,-1.1012 3.3346,-0.4689 l 1.9105,1.0996 c 1.6329,0.9399 2.013,3.2391 0.708,4.613 L 19.545,20.7703 C 19.1016,21.2371 18.497,21.6355 17.75,21.7092 15.9261,21.8893 11.701,21.6548 7.27161,16.9915 3.13844,12.64 2.35326,8.85513 2.25401,7.00591 v 0 C 2.20497,6.09224 2.61224,5.30855 3.1481,4.7444 Z M 7.7609,4.34237 C 7.24855,3.61773 6.32812,3.57449 5.80528,4.12493 l -1.5696,1.6525 C 3.90429,6.12632 3.73042,6.52621 3.75185,6.92552 c 0.08104,1.50981 0.73122,4.95208 4.60734,9.03288 4.06421,4.2789 7.80841,4.3997 9.24341,4.2581 0.2838,-0.028 0.5757,-0.1855 0.8548,-0.4792 l 1.4205,-1.4956 c 0.6128,-0.6452 0.4522,-1.8075 -0.3687,-2.2799 L 17.5987,14.8621 C 17.086,14.567 16.4854,14.6582 16.1,15.064 l -0.4555,0.4795 -0.0013,0.0015 -0.0015,0.0014 -0.0029,0.0031 -0.0064,0.0065 -0.0143,0.0141 c -0.0103,0.01 -0.0222,0.0209 -0.0356,0.0327 -0.0269,0.0236 -0.0602,0.0505 -0.1001,0.0788 -0.0802,0.0568 -0.1869,0.1193 -0.3218,0.1725 -0.276,0.1089 -0.6405,0.1673 -1.0907,0.0942 C 13.1923,15.8058 12.0422,15.1755 10.5194,13.5722 8.99202,11.9642 8.40746,10.7645 8.27675,9.87234 8.21022,9.41827 8.26346,9.05468 8.36116,8.78011 8.40921,8.64508 8.46594,8.53742 8.51826,8.45566 8.54435,8.41489 8.56922,8.38075 8.5912,8.35298 8.60219,8.33909 8.61246,8.32678 8.62182,8.31603 L 8.63514,8.30104 8.64125,8.29441 8.93376,7.98637 C 9.3793,7.51731 9.44403,6.72292 9.02189,6.12586 Z"
							id="path1"
							sodipodi:nodetypes="ccccccccccscccccccccccccccscsccccccccccccsccssccccccc"
						/>
						<motion.path
							initial={{ pathLength: 0 }}
							animate={isInView && { pathLength: 1 }}
							transition={{ duration: 2.5 }}
							d="m 13.2595,1.87983 c 0.0662,-0.40889 0.4527,-0.68626 0.8616,-0.62007 0.0253,0.00485 0.1068,0.02007 0.1494,0.02957 0.0854,0.01901 0.2044,0.04826 0.3528,0.09149 0.2968,0.08644 0.7114,0.22885 1.209,0.45698 0.9963,0.45676 2.3221,1.25576 3.6979,2.63156 1.3758,1.3758 2.1748,2.70161 2.6315,3.69789 0.2282,0.49762 0.3706,0.91222 0.457,1.209 0.0432,0.14841 0.0725,0.26744 0.0915,0.35276 0.0095,0.04267 0.0165,0.07693 0.0213,0.10224 l 0.0058,0.0312 c 0.0661,0.40885 -0.2087,0.81145 -0.6176,0.87765 -0.4077,0.066 -0.7918,-0.2101 -0.8596,-0.617 -0.0021,-0.011 -0.0079,-0.0403 -0.014,-0.068 C 21.2337,9.9997 21.2124,9.91188 21.1786,9.79572 21.1109,9.56339 20.9934,9.21806 20.7982,8.79238 20.4084,7.94207 19.7074,6.76789 18.4695,5.53002 17.2317,4.29216 16.0575,3.59117 15.2072,3.20134 14.7815,3.00618 14.4362,2.88865 14.2038,2.82097 14.0877,2.78714 13.9417,2.75363 13.8863,2.7413 13.4793,2.67347 13.1935,2.28755 13.2595,1.87983 Z"
							id="path2"
						/>
						<motion.path
							initial={{ pathLength: 0 }}
							animate={isInView && { pathLength: 1 }}
							transition={{ duration: 2.5 }}
							fillRule="evenodd"
							clipRule="evenodd"
							d="m 13.4861,5.32931 c 0.1138,-0.39828 0.5289,-0.6289 0.9272,-0.5151 l 7e-4,2e-4 7e-4,2.1e-4 0.0015,4.4e-4 0.0034,9.8e-4 0.0077,0.00231 0.0198,0.00616 c 0.0151,0.00483 0.0339,0.01111 0.0564,0.01907 0.0449,0.01594 0.1042,0.0386 0.177,0.06981 0.1457,0.06243 0.3448,0.15885 0.5893,0.30356 0.4895,0.28969 1.1577,0.77086 1.9426,1.55584 0.785,0.78497 1.2662,1.45316 1.5559,1.94262 0.1447,0.24451 0.2411,0.44358 0.3035,0.58926 0.0312,0.07281 0.0539,0.13216 0.0698,0.17708 0.008,0.02245 0.0143,0.04128 0.0191,0.05635 l 0.0062,0.01979 0.0023,0.00775 0.001,0.00334 4e-4,0.00153 0.02827,0.1658585 C 19.218213,10.07868 18.999433,10.400948 18.6559,10.4991 18.261,10.612 17.8496,10.3862 17.7317,9.99414 L 17.728,9.98336 C 17.7227,9.96833 17.7116,9.93875 17.6931,9.89555 17.6561,9.80921 17.589,9.66798 17.4774,9.47939 17.2544,9.10265 16.8517,8.5334 16.1518,7.83345 15.4518,7.13349 14.8826,6.73079 14.5058,6.50782 14.3172,6.3962 14.176,6.32911 14.0897,6.2921 14.0465,6.27359 14.0169,6.26256 14.0019,6.25722 L 13.9911,6.25353 C 13.599,6.13565 13.3733,5.7242 13.4861,5.32931 Z"
							id="path3"
							sodipodi:nodetypes="cccccccccccccccccccccccccccccccc"
						/>
					</svg>
				</motion.div>
				<motion.form
					ref={form}
					onSubmit={sendEmail}
					className="flex flex-col gap-2"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1, delay: 4 }}
				>
					<input
						type="text"
						required
						placeholder="Name"
						name="from_name"
					/>
					<input
						type="text"
						required
						placeholder="Email"
						name="email"
					/>
					<textarea rows={6} placeholder="Message" name="message" />
					<button>Submit</button>
					{error && "Error"}
					{success && "Success"}
				</motion.form>
			</div>
		</motion.div>
	);
}

export default Contact;
