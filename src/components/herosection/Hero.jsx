import './hero.scss';
const Hero = () => {
	return (
		<div className="hero">
			<div className='wrapper'>
				<div className='text-container'>
					<h2>Devesh choudhary</h2>
					<h1>Web Devloper & Devops guy</h1>
					<div className='buttons'>
						<button>See latest work</button>
						<button>Contact Us</button>
					</div>
					<img src='../../../public/scroll.png' />
				</div>
			</div>

			<div className='SlidingtextContainer'>
				Devops and Web Devloper
			</div>
			<div className='imageContainer'>
				<img src='../../../public/hero.png' alt='heroimage ' />
			</div>
		</div>
	)
}

export default Hero