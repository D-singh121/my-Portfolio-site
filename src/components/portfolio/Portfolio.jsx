// import React from 'react'
import './portfolio.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

const items = [
	{
		id: 1,
		title: "React E-Commerce",
		img: "/ecommercePic.png",
		desc: "This is a e-commerce project build using HTML,CSS,Javascript and React. I have used some amazing tools for this app like  Tailwind ,react-tostify, contxt-api .redux and firebase. ",
	},
	{
		id: 2,
		title: "Todo app",
		img: "/todoimage.png",
		desc: "This is just simple todo list app build using HTML,CSS,Javascript and React.this is very usefull app to manage our day-to-day activity record.",
	},
	{
		id: 3,
		title: "Vanilla JS App",
		img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
	},
	// {
	// 	id: 4,
	// 	title: "Music App",
	// 	img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
	// 	desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
	// },
];

const SingleItem = ({ item }) => {
	const ref = useRef();

	const { scrollYProgress } = useScroll({
		target: ref,
	});

	const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
	return (
		<section>
			<motion.div className='container' >
				<div className='wrapper'>
					<div className='ImageContainer' ref={ref}>
						<img src={item.img} alt='projectImg' />
					</div>
					<motion.div style={{ y }} className='textcontainer'>
						<motion.h2 >{item.title}</motion.h2>
						<p> {item.desc}</p>
						<motion.button className='btn'>See More</motion.button>
					</motion.div>
				</div>

			</motion.div>
		</section>
	);
};



const Portfolio = () => {

	const ref = useRef();

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["end end", "start start"],
	});

	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
	})

	return (
		<div className="portfolio" ref={ref}>
			<div className='progress'>
				<h1 className=''> Featured Works</h1>
				<motion.div style={{ scaleX }} className='progressBar'></motion.div>
			</div>
			{items.map((item) => (
				<SingleItem item={item} key={item.id} />
			))}
		</div>
	)
}

export default Portfolio