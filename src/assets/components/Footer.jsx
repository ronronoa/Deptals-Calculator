import { Facebook, Instagram } from 'lucide-react'
import React from 'react'

export default function Footer() {
  return (
    <footer className="px-2 py-4 bg-gray-200 text-center text-sm text-gray-500">
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto gap-5">
        <div className="flex flex-col">
        &copy; 2025 Deptals Calc. ni Maron. All rights reserved.
        <p>If you have any question or suggestion.</p>
        </div>

        <div className="flex items-center justify-center mt-2 gap-2">
        <a href="https://www.facebook.com/maron.fajardo.9" target='_blank'>
        <Facebook size={25} className='text-black'/>
        </a>
        <a href="https://www.instagram.com/ronronoa_/" target='_blank'>
        <Instagram size={25} className='text-black'/>
        </a>
        </div>
        </div>
    </footer>
  )
}
