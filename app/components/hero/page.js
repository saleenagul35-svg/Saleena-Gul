"use client"
import React from 'react'
import Image from "next/image"
import { motion } from "framer-motion"
import hero from "../../../public/imgs/hero.png"
import { IoMdDownload } from "react-icons/io";
const Hero = () => {
  return (
    <section className='flex justify-center mt-20' id='hero'>
      <motion.div className='w-275 bg-[#fcf4f0] rounded-[40px] h-120 flex justify-center items-center gap-40 shadow-lg shadow-black-200'>
        <div className=' h-90 w-85 bg-[#fcf4f0] flex justify-center '>
          <Image
            src={hero}
            alt='hero'
            className='rounded-[100px] '

          />
        </div>
        <div className='w-120 flex flex-col gap-10'>
          <h1 className='text-[#ff6659] text-6xl font-bold'>Saleena Gul</h1>
          <p className='text-xl text-gray-700'>
            A passionate frontend developer creating modern and interactive web experiences using React, Next.js, and beautiful UI animations.
          </p>
          <div className='flex gap-5'>
            <motion.a href='../../../public/imgs/Saleena-Gul.pdf' download
              whileHover={{ backgroundColor: "white", border: "1px solid #ff6659", color: "#ff6659", scale: 1.08 }}
              className='py-2.75 px-5  rounded-[10px] bg-[#ff6659] text-white flex items-center gap-2'
            ><IoMdDownload />Resume</motion.a>

            <motion.a
              href='#contact'
              whileHover={{ backgroundColor: "#ff6659", color: "white", scale: 1.08 }}
              className='text-[#ff6659] border border-[#ff6659] py-2.75 px-5 rounded-[10px] cursor-pointer'

            >Contact me</motion.a>

          </div>
        </div>
      </motion.div>

    </section>
  )
}

export default Hero
