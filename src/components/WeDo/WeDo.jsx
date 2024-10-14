import React from 'react'
import './wedo.scss'
import Lottie from "lottie-react";
import rocket from './rocket.json'
import { motion} from 'framer-motion'

const variants = {
    initial: {
        y: 500,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1
        },
    },
}

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

export const WeDo = () => {
    return (
        <motion.div className='contact' variants={variants} initial="initial" whileInView="animate">
            <div className="textContainer" variants={variants}>
                <motion.h1 variants={variants}>What we do!</motion.h1>
                <span>Welcome to GDSC-DJSCE , where one gets immense knowledge from the campaigns, workshops, and other events. Shaping tomorrow's world, TODAY!</span>
                <motion.div className='itemCon'>
                    <div className="itemCon2">
                        <motion.div className="item" variants={variants} animate={borderAnimation}>
                            <h2>Marketing</h2>
                        </motion.div>
                    </div>
                    <div className="itemCon2">
                        <motion.div className="item" variants={variants} animate={borderAnimation}>
                            <h2>Creatives</h2>
                        </motion.div>
                        <motion.div className="item" variants={variants} animate={borderAnimation}>
                            <h2>Logistics</h2>
                        </motion.div>
                    </div>
                    <div className="itemCon2">
                        <motion.div className="item" variants={variants} animate={borderAnimation}>
                            <h2>App Development</h2>
                        </motion.div>
                        <motion.div className="item" variants={variants} animate={borderAnimation}>
                            <h2>Web Development</h2>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
            <div className="formContainer">
                <motion.div className="phoneSvg" initial={{ opacity: 1 }} whileInView={{ opacity: 0 }} transition={{ delay: 1, duration: 1 }}>
                    <Lottie animationData={rocket} loop={true} />
                </motion.div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }}>
                    <motion.img src="./gdsc10.png" alt="" variants={shapes} animate="float" />
                </motion.div>
            </div>
        </motion.div>
    )
}
