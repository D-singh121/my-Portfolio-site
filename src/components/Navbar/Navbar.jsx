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
						<img src="/facebook.png" alt="" />
					</a>
					<a href='/'>
						<img src="/instagram.png" alt="" />
					</a>
					<a href="/">
						<img src="/public/youtube.png" alt="" />
					</a>
					<a href="/">
						<img src="/dribbble.png" alt="" />
					</a>


				</div>
			</div>
		</div>
	);
};

export default Navbar;