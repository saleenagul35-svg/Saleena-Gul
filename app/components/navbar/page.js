"use client"
import React from 'react'
import {motion} from "framer-motion"
const Navbar = () => {
    const links = ["About", "Education", "Skills", "Projects", "Contact"]
    return (
        <>
            {/* fdeae0 */}
            <div className='min-w-screen flex justify-center p-3'>
                <nav className='bg-[#fdeae0] flex gap-35 rounded-4xl py-3 px-8 max-w-200 items-center border-[#ff6659] border-[0.2px] shadow-lg shadow-black-200 '>
                    <h1 className='text-[#ff6659] font-bold text-xl'>Saleena</h1>
                    <div className='flex gap-4 font-medium' >
                        {links.map((arr,i) =>
                            <motion.a href={`#${arr.toLowerCase()}`}
                                whileHover={{ backgroundColor: "#ff6659", color: "white", scale: 1.08 }}
                                className='py-2.5 px-3.5 rounded-full'
                                key={i}
                            >{arr}</motion.a>
                        )

                        }

                    </div>
                </nav>
            </div>
        </>


    )
}

export default Navbar
