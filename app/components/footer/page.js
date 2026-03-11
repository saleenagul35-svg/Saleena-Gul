"use client"
import React from 'react'
import { motion } from "framer-motion"
import { MdEmail } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
    const links = ["About", "Education", "Skills", "Projects", "Contact"]
    return (

        <>

            <motion.div className=' bg-[#FAF1ED] mt-20 p-10 flex flex-col justify-center items-center gap-4 shadow-lg shadow-black-200 '>
                <h1 className='text-lg font-medium'>Saleena Gul</h1>
                <p className='text-sm text-gray-700'>MERN stack developer building modren web experiences</p>
                <div className='flex gap-5 '>
                    {links.map((arr) =>
                        <a href={`#${arr.toLowerCase()}`} className='text-sm font-semibold hover:text-[#ff6659]'>{arr}</a>
                    )}
                </div>
                <div className='flex gap-5 '>
                    <a href='http://www.linkedin.com/in/saleena-gul' target='_blank' className='text-gray-700 hover:text-[#ff6659]'><FaLinkedin /></a>
                    <a href='https://mail.google.com/mail/?view=cm&fs=1&to=saleenagul35@gmail.com' target='_blank' className='text-gray-700 hover:text-[#ff6659]'><MdEmail /></a>
                    <a href='https://github.com/saleenagul35-svg' target='_blank' className='text-gray-700 hover:text-[#ff6659]'><IoLogoGithub /></a>
                </div>
                <div className='text-sm text-gray-700'>
                     © {new Date().getFullYear()} Saleena Gul. All rights resevered
                </div>
            </motion.div>


        </>
    )
}

export default Footer
