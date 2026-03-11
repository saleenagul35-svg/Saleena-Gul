"use client"
import React from 'react'
import Image from "next/image"
import { motion } from "framer-motion"
import about from "../../../public/imgs/about.png"

const About = () => {
  return (
    <section className="flex justify-center mt-20 px-4" id="about">
      
      <motion.div
        className="w-full max-w-7xl bg-[#fcf4f0] rounded-[40px] 
        flex flex-col lg:flex-row 
        items-center justify-center 
        gap-10 lg:gap-20 
        p-8 lg:p-12 
        shadow-lg"
      >

        {/* TEXT SECTION */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6 lg:gap-8 lg:w-1/2"
        >

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold flex gap-3">
            <span className="text-black">About</span>
            <span className="text-transparent bg-clip-text bg-linear-to-br from-[#f6aa74] via-[#f8c5bb] to-[#f4593a]">
              Me
            </span>
          </h1>

          <p className="text-gray-700 text-sm sm:text-base">
            I’m a passionate MERN Stack Developer focused on building modern,
            responsive, and user-friendly web applications. I specialize in
            creating interactive front-end interfaces with React and Next.js,
            while developing scalable backend solutions using Node.js,
            Express.js, and MongoDB.
          </p>

          <p className="text-gray-700 text-sm sm:text-base">
            I enjoy turning ideas into functional digital products through
            clean, maintainable code and reusable components. My work emphasizes
            performance, scalability, and intuitive user experiences.
          </p>

          {/* SKILLS TAGS */}
          <div className="flex flex-wrap gap-3">

            <motion.div
              whileHover={{ y: -3, scale: 1.05 }}
              className="bg-[#efeae3] border py-2 px-4 rounded-lg font-semibold text-sm"
            >
              MERN Stack Developer
            </motion.div>

            <motion.div
              whileHover={{ y: -3, scale: 1.05 }}
              className="bg-[#efeae3] border py-2 px-4 rounded-lg font-semibold text-sm"
            >
              React & Next.js
            </motion.div>

            <motion.div
              whileHover={{ y: -3, scale: 1.05 }}
              className="bg-[#efeae3] border py-2 px-4 rounded-lg font-semibold text-sm"
            >
              Express & Node.js
            </motion.div>

          </div>
        </motion.div>


        {/* IMAGE SECTION */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="flex justify-center lg:w-1/2"
        >

          <Image
            src={about}
            alt="about"
            className="rounded-[100px] w-[220px] sm:w-[260px] md:w-[300px] lg:w-[340px]"
          />

        </motion.div>

      </motion.div>

    </section>
  )
}

export default About