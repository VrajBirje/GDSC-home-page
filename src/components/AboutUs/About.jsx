import './about.scss'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const variants = {
  initial: {
    x: -700,
    y: 100,
    opacity: 0
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1
    }
  }
}


const variants2 = {
  initial: {
    height: "350px",
    width: "350px",
    transition: { duration: 0.3 }
  },
  hovered: {
    height: "400px",
    width: "400px",
    transition: { duration: 0.3 }
  },
  reduced: {
    height: "300px",
    width: "300px",
    transition: { duration: 0.3 }
  }
};

const shapes = {
  float: {
    x: [0, -50, 0], // Float up and down
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
    }
  },

}

const shapes2 = {
  float: {
    x: [0, 50, 0], // Float up and down
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
    }
  },

}

const shapes3 = {
  float: {
    y: [0, 20, 0], // Float up and down
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
    }
  },

}

export const About = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  // const redirectToSite = (url) => {
  //   window.location.href = url; // Use the provided URL for redirection
  // };
  return (
    <motion.div className='skills'
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      style={{position:"relative"}}
      animate={isMobile ? "animate" : "initial"}
      whileInView={!isMobile && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.p>We focus on creating dynamic websites <br /> and applications</motion.p>
        <motion.hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <motion.div className="title">
          <motion.img src='/gdsc2.png' style={{ objectFit: "contain" }} alt='' variants={shapes} animate={!isMobile ? "float" : ""}></motion.img>
          <motion.div className='aboutUs'>
            <motion.div className='title2'>
              <motion.div className='h1a'>ABOUT</motion.div>
              <motion.div className='h1b'>US</motion.div>
            </motion.div>
            <motion.div className='title2'>
              <motion.div className='h1c'>GDSC</motion.div>
              <motion.div className='h1d'>DJSCE</motion.div>
            </motion.div>
          </motion.div>
          <motion.img src='/gdsc3.png' style={{ objectFit: "contain" }} alt='' variants={shapes2} animate={!isMobile ? "float" : ""}></motion.img>
        </motion.div>
      </motion.div>
      <motion.div className="listContainer">
        {[{
          title: "Why GDSC?",
          description: "GDSCs are university groups endorsed by Google, offering tech workshops and networking for students to learn about Google tech and collaborate on projects."
        }, {
          title: "Concept of GDSC",
          description: "Google-backed university clubs fostering web and app development, DSA, etc, learning, collaboration, and networking among students interested in Google technologies."
        }, {
          title: "Target Audience",
          description: "University students interested in DSA, web and app development, seeking to enhance their skills and connect with a community passionate about Google technologies"
        }].map((item, index) => (
          <motion.div className="box2">
            <motion.div
              key={index}
              className="box"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              variants={variants2}
              animate={!isMobile ? (hoveredIndex === index ? "hovered" : hoveredIndex !== null ? "reduced" : "initial") : ""}
            >
              <motion.h1>{item.title}</motion.h1>
              <motion.p>{item.description}</motion.p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
      <motion.img className='shapes' src="./Rectangle1.png" alt="" style={{ position: "absolute", left: "7%", top: 250 }} variants={shapes3} animate="float" />
      <motion.img className='shapes' src="./Rectangle2.png" alt="" style={{ position: "absolute", right: "5%", bottom: "35%" }} variants={shapes3} animate="float" />
      <motion.img className='shapes' src="./Ellipse.png" alt="" style={{ position: "absolute", right: "15%", top: 100 }} variants={shapes3} animate="float" />
      <motion.img className='shapes' src="./triangle.png" alt="" style={{ position: "absolute", left: 90, bottom: 120 }} variants={shapes3} animate="float" />
      <motion.img className='shapes' src="./triangle.png" alt="" style={{ position: "absolute", left: "15%", top: 70 }} variants={shapes3} animate="float" />
    </motion.div>
  )
}
