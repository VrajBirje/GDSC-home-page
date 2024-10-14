import './vision.scss'
import React, {  useState, useEffect } from 'react'
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

const textVariants = {
    initial: {
        x: -700,
        opacity: 0,
    },
    initial2: {
        x: 0,
        opacity: 1,
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

const borderAnimation = {
    borderImage: [
        "linear-gradient(90deg, #4285F4, #EA4335, #FBBC05, #34A853) 1",
        "linear-gradient(180deg, #4285F4, #EA4335, #FBBC05, #34A853) 1",
        "linear-gradient(270deg, #4285F4, #EA4335, #FBBC05, #34A853) 1",
        "linear-gradient(360deg, #4285F4, #EA4335, #FBBC05, #34A853) 1"
    ],
    transition: {
        duration: 4,
        repeat: Infinity,
        ease: "linear"
    }
};

export const Vision = () => {
    const [isMobile, setIsMobile] = useState(false);

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
    //     window.location.href = url; // Use the provided URL for redirection
    // };
    return (
        <motion.div className='skills'
        >
            <motion.div className="titleContainer" variants={variants}>
                <motion.div className="title">
                    <motion.img src='/gdsc2.png' style={{ objectFit: "contain" }} alt='' variants={shapes} animate={!isMobile ? "float" : ""}></motion.img>
                    <motion.div className='aboutUs'>
                        <motion.h1 className='h1a'>Our Vision</motion.h1>
                    </motion.div>
                    <motion.img src='/gdsc3.png' style={{ objectFit: "contain" }} alt='' variants={shapes2} animate={!isMobile ? "float" : ""}></motion.img>
                </motion.div>
                <motion.div className='linear' animate={borderAnimation} >
                </motion.div>
                <div className='visionTxt'>
                    <p>GDSC DJCSE is inspired by the Google Developer's Family.</p>
                    <p>Our goal is to learn, explore, innovate and create.</p>
                    <p>And also UPGRADING OURSELVES!</p>
                </div>
                {isMobile ?
                    <div className="cardHolder">
                        <div className="card">
                            <img src="./gdsc9a.png" alt="" className="cardImg" />
                            <div className="cardBody">
                                <h1>GDSC Study Jams</h1>
                                <p>Participating in GDSC study jams unlocks the opportunity to access premium courses at no cost, allowing individuals to acquire valuable skills and knowledge without the financial barrier.</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src="./gdsc9b.png" alt="" className="cardImg" />
                            <div className="cardBody">
                                <h1>Technical Events</h1>
                                <p>Participating in GDSC study jams unlocks the opportunity to access premium courses at no cost, allowing individuals to acquire valuable skills and knowledge without the financial barrier.</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src="./gdsc9c.png" alt="" className="cardImg" />
                            <div className="cardBody">
                                <h1>Overall Development</h1>
                                <p>Participating in GDSC study jams unlocks the opportunity to access premium courses at no cost, allowing individuals to acquire valuable skills and knowledge without the financial barrier.</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src="./gdsc9d.png" alt="" className="cardImg" />
                            <div className="cardBody">
                                <h1>Workshops</h1>
                                <p>Participating in GDSC study jams unlocks the opportunity to access premium courses at no cost, allowing individuals to acquire valuable skills and knowledge without the financial barrier.</p>
                            </div>
                        </div>
                    </div>
                    :
                    <motion.div className="cardHolder" variants={!isMobile ? textVariants : ""} initial={isMobile ? "initial2" : "initial"} whileInView={!isMobile ? "animate" : ""}>
                        <div className="card">
                            <img src="./gdsc9a.png" alt="" className="cardImg" />
                            <div className="cardBody">
                                <h1>GDSC Study Jams</h1>
                                <p>Participating in GDSC study jams unlocks the opportunity to access premium courses at no cost, allowing individuals to acquire valuable skills and knowledge without the financial barrier.</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src="./gdsc9b.png" alt="" className="cardImg" />
                            <div className="cardBody">
                                <h1>Technical Events</h1>
                                <p>Participating in GDSC study jams unlocks the opportunity to access premium courses at no cost, allowing individuals to acquire valuable skills and knowledge without the financial barrier.</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src="./gdsc9c.png" alt="" className="cardImg" />
                            <div className="cardBody">
                                <h1>Overall Development</h1>
                                <p>Participating in GDSC study jams unlocks the opportunity to access premium courses at no cost, allowing individuals to acquire valuable skills and knowledge without the financial barrier.</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src="./gdsc9d.png" alt="" className="cardImg" />
                            <div className="cardBody">
                                <h1>Workshops</h1>
                                <p>Participating in GDSC study jams unlocks the opportunity to access premium courses at no cost, allowing individuals to acquire valuable skills and knowledge without the financial barrier.</p>
                            </div>
                        </div>
                    </motion.div>
                }



            </motion.div>
            <motion.img className='shapes' src="./Rectangle1.png" alt="" style={{ position: "absolute", left: "7%", top: 250 }} variants={shapes3} animate="float" />
            <motion.img className='shapes' src="./Rectangle2.png" alt="" style={{ position: "absolute", right: "5%", bottom: "35%" }} variants={shapes3} animate="float" />
            <motion.img className='shapes' src="./Ellipse.png" alt="" style={{ position: "absolute", right: "15%", top: 80 }} variants={shapes3} animate="float" />
            <motion.img className='shapes' src="./triangle.png" alt="" style={{ position: "absolute", left: 90, bottom: 120 }} variants={shapes3} animate="float" />
            <motion.img className='shapes' src="./triangle.png" alt="" style={{ position: "absolute", left: "15%", top: 70 }} variants={shapes3} animate="float" />
        </motion.div>
    )
}
