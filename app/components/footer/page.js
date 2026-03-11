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
            <motion.div className='bg-[#FAF1ED] mt-20 px-6 py-10 md:px-10 
            flex flex-col justify-center items-center gap-5 
            shadow-lg shadow-black-200 text-center'>

                <h1 className='text-lg md:text-xl font-medium'>
                    Saleena Gul
                </h1>

                <p className='text-sm md:text-base text-gray-700 max-w-md'>
                    MERN stack developer building modern web experiences
                </p>

                {/* Navigation Links */}
                <div className='flex flex-wrap justify-center gap-4 md:gap-6'>
                    {links.map((arr, i) =>
                        <a
                            key={i}
                            href={`#${arr.toLowerCase()}`}
                            className='text-sm font-semibold hover:text-[#ff6659]'
                        >
                            {arr}
                        </a>
                    )}
                </div>

                {/* Social Icons */}
                <div className='flex gap-6 text-lg'>
                    <a href='http://www.linkedin.com/in/saleena-gul' target='_blank' className='text-gray-700 hover:text-[#ff6659]'>
                        <FaLinkedin />
                    </a>

                    <a href='https://mail.google.com/mail/?view=cm&fs=1&to=saleenagul35@gmail.com' target='_blank' className='text-gray-700 hover:text-[#ff6659]'>
                        <MdEmail />
                    </a>

                    <a href='https://github.com/saleenagul35-svg' target='_blank' className='text-gray-700 hover:text-[#ff6659]'>
                        <IoLogoGithub />
                    </a>
                </div>

                <div className='text-xs md:text-sm text-gray-700'>
                    © {new Date().getFullYear()} Saleena Gul. All rights reserved
                </div>

            </motion.div>
        </>
    )
}

export default Footer