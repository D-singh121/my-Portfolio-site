import './hero.scss';
import { motion } from 'framer-motion';

const textVariants = {
	initial: {
		x: -500,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 1.5,
			staggerChildern: 0.1,
		},
	},
	scrollButton: {
		opacity: 0,
		y: 10,
		transition: {
			duration: 2,
			repeat: Infinity,
		}
	}
};

const sliderVariants = {
	initial: {
		x: 0,

	},
	animate: {
		x: "-220%",
		transition: {
			duration: 20,
			repeat: Infinity,
			repeatType: "mirror",
		},
	}
};

const Hero = () => {
	return (
		<div className="hero">
			<div className='wrapper'>
				<motion.div variants={textVariants} className='text-container' initial="initial" animate="animate">
					<motion.h2 variants={textVariants}>Devesh choudhary</motion.h2>
					<motion.h1 variants={textVariants} > Web Devloper & Devops guy</motion.h1>
					<motion.div variants={textVariants} className='buttons'>
						<motion.button
							variants={textVariants}

						><a href='#portfolio'>See latest work</a>
						</motion.button>

						<motion.button variants={textVariants}>
							<a href='#contact'>Contact Us</a></motion.button>
					</motion.div>
					<motion.img variants={textVariants} animate="scrollButton" src='/scroll.png' />
				</motion.div>
			</div>

			<motion.div variants={sliderVariants} animate="animate" initial="initial" className='SlidingtextContainer'>
				Devops and Web Devloper
			</motion.div>
			<div className='imageContainer'>
				<img src='/heroImg.png' alt='heroimage ' />
			</div>
		</div>
	)
}

export default Hero