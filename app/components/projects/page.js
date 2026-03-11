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
            description: "A dynamic burger customization application built in vanilla JavaScript. Users can add and remove ingredients in real-time with DOM manipulation, updating pricing logic instantly for an interactive user experience.",
            github: "https://github.com/saleenagul35-svg/Burger-Builder.git",
            live: "https://saleenagul35-svg.github.io/Burger-Builder/",
            image: "/imgs/Burger-Builder.png",
        },
        {
            title: "Finance Tracker App",
            tech: "React, Tailwind CSS",
            description: "A personal finance tracking application that allows users to manage income and expenses effectively. Focused on clean UI structure, reusable components, and performance optimization.",
            github: "https://github.com/saleenagul35-svg/finance-Tracker-App.git",
            live: "https://finance-tracker-app-beige.vercel.app/",
            image: "/imgs/Finance-Tracker.png",
        },
        {
            title: "Mythical Creature Explorer",
            tech: "HTML, CSS, JavaScript (Vanilla JS)",
            description: "An interactive web application that allows users to explore various mythical creatures with dynamic content rendering using pure JavaScript. Built with advanced DOM manipulation, structured data handling, and responsive UI to deliver an engaging browsing experience.",
            github: "https://github.com/saleenagul35-svg/Mythical-Creatures-Explorer.git",
            live: "https://saleenagul35-svg.github.io/Mythical-Creatures-Explorer/",
            image: "/imgs/Mythical-Creature-Explorer.png",
        },
        {
            title: "Project Management Dashboard",
            tech: "HTML, CSS, JavaScript (Vanilla JS)",
            description: "A fully interactive task and workflow dashboard developed using pure JavaScript. Features task tracking, dynamic UI updates, and structured component logic for managing projects efficiently.",
            github: "https://github.com/saleenagul35-svg/Project-management-dashboard.git",
            live: "https://saleenagul35-svg.github.io/Project-management-dashboard/",
            image: "/imgs/Dashboard.png",
        },

        {
            title: "React To-Do App",
            tech: "React, Tailwind CSS",
            description: "A modern task management application built with React and styled using Tailwind CSS. Implements component-based architecture, dynamic state management, and a clean responsive design.",
            github: "#",
            live: "#",
            image: "/imgs/To-do-list.png",
        },
        {
            title: "Next.js Calculator",
            tech: "Next.js, Tailwind CSS",
            description: "A responsive and optimized calculator application built using Next.js. Demonstrates efficient state handling, reusable components, and clean UI design principles.",
            github: "https://github.com/saleenagul35-svg/Calculator.git",
            live: "https://calculator-two-nu-14.vercel.app/",
            image: "/imgs/Calculator.png",
        },

    ];

    const leftProjects = projectsArray.slice(0, 4)
    const rightProjects = projectsArray.slice(4, 6)
    return (
        <>
            <section className='flex justify-center mt-20' id='projects'>
                <motion.div className='w-275 bg-[#FAF1ED] rounded-[40px] h-250 flex flex-col justify-center p-10 items-center gap-10 shadow-lg shadow-black-200 '>
                    <h1 className='text-transparent bg-clip-text bg-linear-to-br from-[#f6aa74] via-[#f8c5bb] to-[#f4593a] text-6xl font-bold'>Projects</h1>
                    <div className='flex justify-center items-center gap-25 '>
                        <div className='flex flex-col gap-10'>
                            {leftProjects.map((arr, i) =>

                                <div className=' bg-[#FAF1ED] ' key={i}>
                                    <Image
                                        src={arr.image}
                                        alt={arr.title}
                                        height={300}
                                        width={400}
                                        className='rounded-[10px] '


                                    />
                                </div>


                            )}
                        </div>
                        <div className=' h-90 w-85 bg-[#FAF1ED] flex justify-center'>
                            <Image
                                src={projects}
                                alt='projects'
                                className='rounded-[100px] '

                            />
                        </div>
                        <div className='flex flex-col gap-10'>
                            {rightProjects.map((arr, i) =>

                                <div className=' bg-[#FAF1ED] ' key={i}>
                                    <Image
                                        src={arr.image}
                                        alt={arr.title}
                                        height={396}
                                        width={300}
                                        className='rounded-[10px] max-h-99 '


                                    />
                                </div>


                            )}
                        </div>
                    </div>
                </motion.div>
            </section>
        </>
    )
}

export default Projects
