import React from 'react'
import './navbar.scss'
import { motion } from 'framer-motion'
import { Sidebar } from '../sidebar/Sidebar'
// import {gdscLogo} from '../../../public/GDSCLogo.jpg'

export const Navbar = () => {
    return (
        <div className='navbar'>
            <Sidebar />
            <div className="wrapper">
                <div>
                    <motion.div className='logoCon' initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
                        <img src="./image.png" alt="" className='gdscLogo' />
                        <img src="./gdscName.jpg" alt="" className='gdscLogo2' />
                    </motion.div>
                </div>
                <div className="social">
                </div>
            </div>
        </div>
    )
}
