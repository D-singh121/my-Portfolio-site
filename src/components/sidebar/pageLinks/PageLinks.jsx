import { motion } from "framer-motion";
// import { NavLink } from "react-router-dom";

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

const PageLinks = () => {
  const items = ["Homepage", "Services", "Portfolio", "Contact"];

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          href={`#${item.toLowerCase()}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {item}
        </motion.a>
      ))}

      {/* //**** will test later */}
      {/* <NavLink to="/">Homepage</NavLink>
      <NavLink to="/services" >Services</NavLink>
      <NavLink to="/portfolio" >Portfolio</NavLink>
      <NavLink to="/about">About Us</NavLink> */}

    </motion.div>
  );
};

export default PageLinks;
