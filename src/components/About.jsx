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
I’m a Bachelor of Commerce graduate from Chaudhary Charan Singh University, Meerut, with a growing passion for technology and web development. I enjoy exploring creative ways to build modern, responsive, and user-friendly web applications that make everyday tasks simpler and more efficient.  
<br /><br />
Beyond coding, I’m deeply interested in learning about animals, staying updated with current affairs, and watching or playing cricket — a sport that inspires teamwork, strategy, and persistence.  
<br /><br />
My long-term goal is to combine my business background and technical skills to create impactful digital solutions that connect people and ideas seamlessly.
</p>

    </motion.section>
  );
}
