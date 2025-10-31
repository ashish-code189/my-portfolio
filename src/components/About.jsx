import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="about"
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2>About Me</h2>
      <p>
        I'm a B.Com graduate from Chaudhary Charan Singh University, Meerut.  
        I love learning about animals, reading news, and of course, watching and
        playing cricket 🏏.  
        My goal is to build beautiful and functional web applications that make
        life easier.
      </p>
    </motion.section>
  );
}
