import React from 'react'
import { motion } from 'framer-motion'

export const Togglebutton = ({setOpen}) => {
  return (
    <button onClick={()=>setOpen(prev=>!prev)}>
        <svg width="23" height="23" viewBox='0 0 25 25'>
            <motion.path strokeWidth="3" stroke="#EA4335" strokeLinecap="round" variants={{
                closed: {d: "M 2 2.5 L 20 2.5"},
                open: {d: "M 3 16.5 L 17 2.5"}
            }}/>
            <motion.path strokeWidth="3" stroke="#4285F4" strokeLinecap="round" 
            d="M 2 9.423 L 20 9.423"
            variants={{
                closed: {opacity:1},
                open: {opacity:0}
            }}/>
            <motion.path strokeWidth="3" stroke="#FBBC05 " strokeLinecap="round" 
            d="M 2 22.75 L 20 22.75"
            variants={{
                closed: {opacity:1},
                open: {opacity:0}
            }}/>
            <motion.path strokeWidth="3" stroke="#34A853" strokeLinecap="round" variants={{
                closed: {d: "M 2 16.346 L 20 16.346"},
                open: {d: "M 3 2.5 L 17 16.346"}
            }}/>
        </svg>
    </button>
  )
}
