import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./Navigation"
const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link to="/">Home</Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link to="/contact">Contact</Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link to="/booking">Booking</Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link to="/about">About Us</Link>
        </motion.li>
      </ul>
    </nav>
  );
};

export default Navigation;
