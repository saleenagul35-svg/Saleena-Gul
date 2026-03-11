"use client"
import React from 'react'
import { motion } from "framer-motion"
import Image from "next/image"
import skill from "../../../public/imgs/skills.png"

const Skills = () => {

    const skills = ["HTML",
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
        "Git/Git hub"]
    return (
        <>
            <section className=' flex justify-center mt-20' id='skills'>
                <motion.div className='w-275 bg-[#fcf4f0] rounded-[40px] h-140 flex flex-col justify-center items-center gap-15 shadow-lg shadow-black-200 '>
                    <h1 className='text-transparent bg-clip-text bg-linear-to-br from-[#f6aa74] via-[#f8c5bb] to-[#f4593a] text-6xl font-bold'>Skills</h1>
                    <div className='flex gap-25'>
                        <div className='grid grid-cols-3 gap-10'>
                            {skills.map((arr, i) =>
                                <motion.div key={i} className='bg-white shadow-lg shadow-black-200 p-5 rounded-2xl'
                                whileHover={{y:-3,scale:1.05, boxShadow:"0px 0px 25px #f9a59d"}}
                                >{arr}</motion.div>
                            )}
                        </div>
                        <div className=' h-90 w-85 bg-[#fcf4f0] flex justify-center '>
                            <Image
                                src={skill}
                                alt='skills'
                                className='rounded-[100px] '

                            />
                        </div>
                    </div>

                </motion.div>
            </section>
        </>
    )
}

export default Skills
