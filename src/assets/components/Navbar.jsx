import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
        
        const handleClick = () => {
            setIsOpen(!isOpen)
        }
  return (
        <nav className='border p-4 shadow-md border-gray-100 md:hidden'>
           <ul className='flex cursor-pointer' onClick={handleClick}>
            <li>About </li>
            <div>{!isOpen ? <ChevronDown /> : <ChevronUp />}</div>
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
        </nav>
  )
}
