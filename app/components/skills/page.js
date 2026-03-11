"use client"
import React from 'react'
import { motion } from "framer-motion"
import Image from "next/image"
import skill from "../../../public/imgs/skills.png"

const Skills = () => {

    const skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Next.js",
        "Bootstrap",
        "Tailwind",
        "Rest API",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Git/Git hub"
    ]

    return (
        <>
            <section className='flex justify-center mt-20 px-4' id='skills'>

                <motion.div className='w-full max-w-6xl bg-[#fcf4f0] rounded-[40px] 
                py-12 px-6 md:px-10 
                flex flex-col justify-center items-center gap-12 
                shadow-lg shadow-black-200'>

                    <h1 className='text-transparent bg-clip-text bg-linear-to-br from-[#f6aa74] via-[#f8c5bb] to-[#f4593a] text-4xl md:text-5xl lg:text-6xl font-bold'>
                        Skills
                    </h1>

                    <div className='flex flex-col lg:flex-row items-center gap-12 lg:gap-16'>

                        {/* Skills Grid */}
                        <div className='grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8'>

                            {skills.map((arr, i) =>
                                <motion.div
                                    key={i}
                                    initial={{ y: 50, x: 50, opacity: 0 }}
                                    whileInView={{ y: 0, x: 0, opacity: 1 }}
                                    transition={{ duration: 0.8 }}
                                    viewport={{ once: false }}
                                    whileHover={{ y: -3, scale: 1.05, boxShadow: "0px 0px 25px #f9a59d" }}
                                    className='bg-white shadow-lg shadow-black-200 p-4 md:p-5 rounded-2xl text-center'
                                >
                                    {arr}
                                </motion.div>
                            )}

                        </div>

                        {/* Image */}
                        <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 1.8, repeat: Infinity }}
                            className='h-64 w-64 md:h-80 md:w-80 flex justify-center'
                        >
                            <Image
                                src={skill}
                                alt='skills'
                                className='rounded-[100px] object-contain'
                            />
                        </motion.div>

                    </div>

                </motion.div>

            </section>
        </>
    )
}

export default Skills