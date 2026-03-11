"use client"
import React from 'react'
import { motion } from "framer-motion"

const Navbar = () => {
    const links = ["About", "Education", "Skills", "Projects", "Contact"]

    return (
        <>
            <div className='w-full flex justify-center p-3'>

                <motion.nav
                    initial={{ y: -80, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                    className='bg-[#fdeae0] 
                    flex flex-col md:flex-row 
                    gap-4 md:gap-12 
                    rounded-4xl mt-5 
                    py-3 px-6 md:px-8 
                    w-full max-w-5xl 
                    items-center justify-between 
                    border-[#ff6659] border-[0.2px] 
                    shadow-lg shadow-black-200'
                >

                    <h1 className='text-[#ff6659] font-bold text-xl'>
                        Saleena
                    </h1>

                    <div className='flex flex-wrap justify-center gap-2 md:gap-4 font-medium'>

                        {links.map((arr, i) =>
                            <motion.a
                                href={`#${arr.toLowerCase()}`}
                                key={i}
                                whileHover={{ backgroundColor: "#ff6659", color: "white", scale: 1.08 }}
                                className='py-2 px-3 md:py-2.5 md:px-3.5 rounded-full text-sm md:text-base'
                            >
                                {arr}
                            </motion.a>
                        )}

                    </div>

                </motion.nav>

            </div>
        </>
    )
}

export default Navbar