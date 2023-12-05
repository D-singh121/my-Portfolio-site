import "./navbar.scss";
// import { Link } from "react-router-dom";
import { motion } from "framer-motion"
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
	return (
		<div className="navbar">
			<Sidebar />

			<div className="wrapper">

				<motion.span
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1 }}

					className="logo">Dee .
				</motion.span>


				<div className="social">
					{/* <Link to="/">
						<img src="/facebook.png" alt="" />
					</Link>
					<Link to='/'>
						<img src="/instagram.png" alt="" />
					</Link>
					<Link to="/">
						<img src="/public/youtube.png" alt="" />
					</Link>
					<Link to="/">
						<img src="/dribbble.png" alt="" />
					</Link> */}

					<a href="/">
						<img src="/facebook.png" alt="facebook" />
					</a>
					<a href='/'>
						<img src="/instagram.png" alt="insta" />
					</a>
					<a href="https://twitter.com/Dee_Singh121">
						<img className="twitter" src="/twitter.png" alt="twitter" />
					</a>
					<a href="https://www.linkedin.com/in/devesh-choudhary-b25a01152/">
						<img className="linkedinog" src="/linkedinog.png" alt="linkdin" />
					</a>


				</div>
			</div>
		</div>
	);
};

export default Navbar;