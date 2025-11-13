
import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
        
        const handleClick = () => {
            setIsOpen(!isOpen)
        }
  return (
        <motion.nav 
        className='flex justify-between items-center border p-4 shadow-md border-gray-100 md:hidden'
        initial={{opacity: 0, y: -20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 1}}
        >
            <div className="flex items-center">
            <h1 className='text-xl font-extrabold'>
                Psyculator
            </h1>
            </div>
           <ul className='flex cursor-pointer' onClick={handleClick}>
            <li>About </li>
            <div className={`transition duration-300 ${isOpen ? '-rotate-180' : ''}`}>
                <ChevronDown />
            </div>
           </ul>

           <div className={`p-6 border shadow-md rounded ${isOpen ? "absolute top-15 left-0 md:left-15 z-50 bg-gray-100 md:w-md" : "hidden"}`}>
           <p className='text-sm text-gray-600'>
            <strong>Disclaimer:
                </strong> This project is designed for educational or personal use only. All data you input is processed locally in your browser and is 
                <strong> not stored</strong>, 
                tracked, or transmitted to any server.
            </p>
            <p className='text-sm text-gray-600 mt-2'>The owner and developer of this website <strong>do not collect or have access to any of your information</strong>. Your privacy and data security are completely respected and protected.</p>
           </div>
        </motion.nav>
  )
}

