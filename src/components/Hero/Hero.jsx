import React from 'react'
import "./hero.scss"
import { motion, useCycle } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation';

const shapes = {
    float: {
        y: [0, -20, 0], // Float up and down
        transition: {
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
        }
    },

}

const textVariants = {
    initial: {
        x: -700,
        opacity: 0,
    },
    animate: {
        x: 20,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    },
    scrollbutton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    }
};

const imageVariants = {
    big: {
        scale: 1.2,
        transition: {
            duration: 2,
            ease: "easeInOut",
        }
    },
    small: {
        scale: 0.8,
        transition: {
            duration: 2,
            ease: "easeInOut",
        }
    }
};

export const Hero = () => {
    // Use Framer Motion's useCycle to alternate between 'big' and 'small'
    const [animationState, cycleAnimationState] = useCycle("big", "small");

    return (
        <div className='hero'>
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.div className="div" variants={textVariants}>
                        <TypeAnimation
                            sequence={[
                                'Welcome to',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'स्वागत आहे',
                                1000,
                                'آپ کا استقبال ہے۔',
                                1000,
                                'स्वागत है',
                                1000,
                                'સ્વાગત છે',
                                1000
                            ]}
                            wrapper="h2"
                            speed={50}
                            repeat={Infinity}
                        />
                    </motion.div>
                    <motion.h1 variants={textVariants}>GDSC DJSCE</motion.h1>
                    <div className='h3Con'>
                        <motion.h3 style={{ color: "#EA4335" }} variants={textVariants}>Collaborate</motion.h3>
                        <motion.h3 style={{ color: "#4285F4" }} variants={textVariants}>Learn</motion.h3>
                        <motion.h3 style={{ color: "#34A853" }} variants={textVariants}>Explore</motion.h3>
                        <motion.h3 style={{ color: "#FBBC05" }} variants={textVariants}>Create</motion.h3>
                    </div>
                    <motion.h4 variants={textVariants}>Meet and learn with other developers and build solutions for communities with Google technology.</motion.h4>
                    {/* <motion.img className="scrollAnimation" animate="scrollbutton" src="/scroll.png" alt="" variants={textVariants} /> */}
                </motion.div>
            </div>
            {/* <motion.div className="sliddingTextContainer" variants={Variants} initial="initial" animate="animate">
                MERN Stack Web Developer
            </motion.div> */}
            <div className="imageContainer">
                <div className="imgCon">
                    <motion.img
                        src="/gdsc2.png"
                        alt=""
                        variants={imageVariants}
                        animate={animationState}
                        onAnimationComplete={() => cycleAnimationState()}
                    />
                    {/* <p>Helo</p> */}
                    <motion.img
                        src="/gdsc3.png"
                        alt=""
                        variants={imageVariants}
                        animate={animationState === "big" ? "small" : "big"}
                    />
                </div>
            </div>
            <motion.img className='shapes' src="./Rectangle1.png" alt="" style={{ position: "absolute", left: 30, top: 250 }} variants={shapes} animate="float" />
            <motion.img className='shapes' src="./Rectangle2.png" alt="" style={{ position: "absolute", left: "30%", bottom: 60 }} variants={shapes} animate="float" />
            <motion.img className='shapes' src="./Ellipse.png" alt="" style={{ position: "absolute", right: 100, top: 100 }} variants={shapes} animate="float" />
            <motion.img className='shapes' src="./triangle.png" alt="" style={{ position: "absolute", left: 90, bottom: 120 }} variants={shapes} animate="float" />
            <motion.img className='shapes' src="./triangle.png" alt="" style={{ position: "absolute", left: "45%", top: 170 }} variants={shapes} animate="float" />
            <motion.img className="scrollAnimation" style={{ position: "absolute", left: "47%", bottom: 100, height: "50px" }} animate="scrollbutton" src="/scroll.png" alt="" variants={textVariants} />
        </div>
    )
}

