"use client"
import React from 'react'
import Image from "next/image"
import { motion } from "framer-motion"
import projects from "../../../public/imgs/projects.png"

const Projects = () => {

    const projectsArray = [
        {
            title: "Burger Builder App",
            tech: "HTML, CSS, JavaScript (Vanilla JS)",
            description: "A dynamic burger customization application built in vanilla JavaScript.",
            github: "https://github.com/saleenagul35-svg/Burger-Builder.git",
            live: "https://saleenagul35-svg.github.io/Burger-Builder/",
            image: "/imgs/Burger-Builder.png",
        },
        {
            title: "Finance Tracker App",
            tech: "React, Tailwind CSS",
            description: "A personal finance tracking application.",
            github: "https://github.com/saleenagul35-svg/finance-Tracker-App.git",
            live: "https://finance-tracker-app-beige.vercel.app/",
            image: "/imgs/Finance-Tracker.png",
        },
        {
            title: "Mythical Creature Explorer",
            tech: "HTML, CSS, JavaScript (Vanilla JS)",
            description: "An interactive web application to explore mythical creatures.",
            github: "https://github.com/saleenagul35-svg/Mythical-Creatures-Explorer.git",
            live: "https://saleenagul35-svg.github.io/Mythical-Creatures-Explorer/",
            image: "/imgs/Mythical-Creature-Explorer.png",
        },
        {
            title: "Project Management Dashboard",
            tech: "HTML, CSS, JavaScript (Vanilla JS)",
            description: "Interactive task and workflow dashboard.",
            github: "https://github.com/saleenagul35-svg/Project-management-dashboard.git",
            live: "https://saleenagul35-svg.github.io/Project-management-dashboard/",
            image: "/imgs/Dashboard.png",
        },
        {
            title: "React To-Do App",
            tech: "React, Tailwind CSS",
            description: "Modern task management application.",
            github: "#",
            live: "#",
            image: "/imgs/To-do-list.png",
        },
        {
            title: "Next.js Calculator",
            tech: "Next.js, Tailwind CSS",
            description: "Responsive calculator built with Next.js.",
            github: "https://github.com/saleenagul35-svg/Calculator.git",
            live: "https://calculator-two-nu-14.vercel.app/",
            image: "/imgs/Calculator.png",
        },
    ];

    const leftProjects = projectsArray.slice(0, 4)
    const rightProjects = projectsArray.slice(4, 6)

    return (
        <>
            <section className='flex justify-center mt-20 px-4' id='projects'>

                <motion.div className='w-full max-w-6xl bg-[#FAF1ED] rounded-[40px] 
                py-12 px-6 md:px-10 
                flex flex-col justify-center items-center gap-10 
                shadow-lg shadow-black-200'>

                    <h1 className='text-transparent bg-clip-text bg-linear-to-br from-[#f6aa74] via-[#f8c5bb] to-[#f4593a] text-4xl md:text-5xl lg:text-6xl font-bold'>
                        Projects
                    </h1>

                    <div className='flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-16'>

                        {/* Left Projects */}
                        <div className='flex flex-col gap-8'>
                            {leftProjects.map((arr, i) =>

                                <motion.a
                                    key={i}
                                    href={arr.live}
                                    target='_blank'
                                    initial={{ scale: 0.2, x: 100, opacity: 0 }}
                                    whileInView={{ scale: 1, x: 0, opacity: 1 }}
                                    viewport={{ once: false }}
                                    transition={{ duration: 0.6 }}
                                    whileHover={{ y: -5, scale: 1.05,borderRadius:"20px", boxShadow: "0px 0px 25px #f9a59d" }}
                                    className='bg-[#FAF1ED]'
                                >
                                    <Image
                                        src={arr.image}
                                        alt={arr.title}
                                        height={300}
                                        width={400}
                                        className='rounded-[20px] w-full max-w-xs h-40 sm:h-44 md:h-42 object-cover'
                                    />
                                </motion.a>

                            )}
                        </div>

                        {/* Center Image */}
                        <motion.div
                            animate={{ y: [0, -3, 0] }}
                            transition={{ duration: 1.8, repeat: Infinity }}
                            className='h-64 w-64 md:h-80 md:w-80 flex justify-center'
                        >
                            <Image
                                src={projects}
                                alt='projects'
                                className='rounded-[100px] object-contain'
                            />
                        </motion.div>

                        {/* Right Projects */}
                        <div className='flex flex-col gap-8'>
                            {rightProjects.map((arr, i) =>

                                <motion.a
                                    key={i}
                                    href={arr.live}
                                    target='_blank'
                                    initial={{ scale: 0.2, x: -100, opacity: 0 }}
                                    whileInView={{ scale: 1, x: 0, opacity: 1 }}
                                    viewport={{ once: false }}
                                    transition={{ duration: 0.8 }}
                                    whileHover={{ y: -5, scale: 1.05, borderRadius:"20px", boxShadow: "0px 0px 25px #f9a59d" }}
                                    className='bg-[#FAF1ED]'
                                >
                                    <Image
                                        src={arr.image}
                                        alt={arr.title}
                                        height={396}
                                        width={300}
                                       className='rounded-[20px] w-full max-w-xs h-40 sm:h-44 md:h-90 object-cover'
                                    />
                                </motion.a>

                            )}
                        </div>

                    </div>

                </motion.div>

            </section>
        </>
    )
}

export default Projects