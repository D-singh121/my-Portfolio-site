import { motion, useInView } from "framer-motion"
import { useRef } from "react";
import "./services.scss"


const variants = {
	initial: {
		x: -500,
		y: 100,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
			staggerChildren: 0.1,
		},
	},
};

const Services = () => {
	const ref = useRef();

	const isInView = useInView(ref, { margin: "-100px" });

	return (
		<motion.div
			ref={ref}
			className="services"
			variants={variants}
			initial="initial"
			animate={"animate"}>

			<motion.div className="textContainer" variants={variants}>
				<p>
					We focus on helping your brand <br /> grow and move forward
				</p>
				<hr />
			</motion.div>

			<motion.div className="titleContainer" variants={variants}>
				<div className="title">
					<img src="../../../public/people.webp" alt="people" />
					<h1><motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas</h1>
				</div>

				<div className="title">
					<h1><motion.b whileHover={{ color: "orange" }}>For Your</motion.b> Business.</h1>
					<button>WHAT WE DO </button>
				</div>
			</motion.div>

			{/* //***** list box section */}
			<motion.div className="listContainer" variants={variants}>
				<motion.div whileHover={{ background: "lightgray", color: "black" }} className="box" >
					<h2>Branding</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
						libero enim nisi aliquam consectetur expedita magni eius ex corrupti
						animi! Ad nam p
					</p>
					<button>Do Check</button>
				</motion.div>

				<motion.div whileHover={{ background: "lightgray", color: "black" }} className="box" variants={variants}>
					<h2>Branding</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
						libero enim nisi aliquam consectetur expedita magni eius ex corrupti
						animi! Ad nam p
					</p>
					<button>Do Check</button>
				</motion.div>

				<motion.div whileHover={{ background: "lightgray", color: "black" }} className="box" >
					<h2>Branding</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
						libero enim nisi aliquam consectetur expedita magni eius ex corrupti
						animi! Ad nam p
					</p>
					<button>Do Check</button>
				</motion.div>

				<motion.div whileHover={{ background: "lightgray", color: "black" }} className="box" >
					<h2>Branding</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
						libero enim nisi aliquam consectetur expedita magni eius ex corrupti
						animi! Ad nam p

					</p>
					<button>Do Check</button>
				</motion.div>
			</motion.div>

		</motion.div>

	)
}

export default Services