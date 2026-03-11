"use client"
import React from 'react'
import Image from "next/image"
import { motion } from "framer-motion"
import hero from "../../../public/imgs/hero.png"
import { IoMdDownload } from "react-icons/io";

const Hero = () => {
  return (
    <section className='flex justify-center mt-20 px-4' id='hero'>

      <motion.div className='w-full max-w-6xl bg-[#fcf4f0] rounded-[40px] 
      py-12 px-6 md:px-10 
      flex flex-col lg:flex-row 
      justify-center items-center 
      gap-12 lg:gap-24 
      shadow-lg shadow-black-200'>

        {/* Image */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className='h-64 w-64 md:h-80 md:w-80 flex justify-center'
        >
          <Image
            src={hero}
            alt='hero'
            className='rounded-[100px] object-contain'
          />
        </motion.div>


        {/* Text */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className='w-full max-w-xl flex flex-col gap-6 md:gap-8'
        >

          <h1 className='text-[#ff6659] text-4xl md:text-5xl lg:text-6xl font-bold'>
            Saleena Gul
          </h1>

          <p className='text-base md:text-lg text-gray-700'>
            MERN Stack Developer focused on building responsive and high-performance web applications using React and Next.js on the frontend, with scalable backend solutions powered by Node.js, Express.js, and MongoDB. Passionate about clean code, intuitive user interfaces, and delivering seamless digital experiences.
          </p>

          <div className='flex flex-wrap gap-4'>
            <motion.a
              href='../../../public/imgs/Saleena-Gul.pdf'
              download
              whileHover={{ backgroundColor: "white", border: "1px solid #ff6659", color: "#ff6659", scale: 1.08 }}
              className='py-2.5 px-5 rounded-[10px] bg-[#ff6659] text-white flex items-center gap-2'
            >
              <IoMdDownload /> Resume
            </motion.a>

            <motion.a
              href='#contact'
              whileHover={{ backgroundColor: "#ff6659", color: "white", scale: 1.08 }}
              className='text-[#ff6659] border border-[#ff6659] py-2.5 px-5 rounded-[10px] cursor-pointer'
            >
              Contact me
            </motion.a>
          </div>

        </motion.div>

      </motion.div>

    </section>
  )
}

export default Hero