"use client"
import React from 'react'
import Image from "next/image"
import { motion } from "framer-motion"
import about from "../../../public/imgs/about.png"
import { IoMdDownload } from "react-icons/io";
const About = () => {
    return (
        <section className='flex justify-center mt-20'id='about'>
            <motion.div className='w-275 bg-[#fcf4f0] rounded-[40px] h-120 flex justify-center items-center gap-20 shadow-lg shadow-black-200'>

                <div className='w-150 flex flex-col gap-10'>
                    <h1 className='text-[#ff6659] text-6xl font-bold flex gap-5'><span className='text-black'>About</span><span>Me</span></h1>
                    <p className='text-l text-gray-700'>
                        I’m a passionate frontend developer who enjoys transforming ideas into beautiful and interactive web experiences. I focus on building modern, responsive interfaces using the latest web technologies.

                    </p>
                    <p className='text-l text-gray-700'>
                        
                        My goal is to create user-friendly websites with smooth animations, clean design, and strong performance. I enjoy learning new tools and constantly improving my development skills.
                    </p>
                    <div className='flex gap-5'>
                        <motion.div
                            whileHover={{y:-3,scale: 1.05 }}
                            className='bg-[#efeae3] border  py-2.75 px-5 rounded-[10px] cursor-pointer font-semibold'

                        >Mern Stack Developer</motion.div>

                        <motion.div
                            whileHover={{y:-3,  scale: 1.05 }}
                            className='bg-[#efeae3] border  py-2.75 px-5 rounded-[10px] cursor-pointer font-semibold'

                        >React & Next.js</motion.div>
                                                <motion.div
                            whileHover={{ y:-3, scale: 1.05 }}
                            className='bg-[#efeae3] border  py-2.75 px-5 rounded-[10px] cursor-pointer font-semibold'

                        >Express & Node.js</motion.div>

                    </div>
                </div>
                <div className=' h-65 w-85 bg-[#fcf4f0] '>
                    <Image
                        src={about}
                        alt='about'
                        className='rounded-[100px] relative bottom-8'

                    />
                </div>
            </motion.div>

        </section>
    )
}

export default About
