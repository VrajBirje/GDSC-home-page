import React, { useState } from 'react'
import { Links } from './links/Links'
import { Togglebutton } from './togglebutton/Togglebutton'
import './sidebar.scss'
import { motion } from 'framer-motion'

export const Sidebar = () => {

    const [open, setOpen] = useState(false);
    const variants = {
        open: {
            clipPath: "circle(1200px at 50px 50px)",
            border: "2px solid #FFFFFF", // Add border for the large circle
            transition: {
                type: "spring",
                stiffness: 20
            }
        },
        closed: {
            clipPath: "circle(30px at 50px 50px)",
            border: "2px solid #FFFFFF", // Add border for the small circle
            transition: {
                delay: 0.1,
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }
    };
    const variants2 = {
        open: {
            clipPath: "circle(1205px at 50px 50px)",
            transition: {
                type: "spring",
                stiffness: 20
            }
        },
        closed: {
            clipPath: "circle(35px at 50px 50px)",
            transition: {
                delay: 0.1,
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }
    };

   
    return (
        <motion.div className="sidebar" animate={open ? "open" : "closed"}>
            <motion.div className="bg2" variants={variants2}>
                <motion.div className="bg" variants={variants}>
                    <Links />
                    {/* <motion.div className='links' variants={ListVariants}>
                {items.map((item) => (
                    <motion.a href={`#${item}`} key={item} variants={itemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>{item}</motion.a>
                ))}
            </motion.div> */}
                </motion.div>
                <Togglebutton setOpen={setOpen} />
            </motion.div>
        </motion.div>
    )
}
