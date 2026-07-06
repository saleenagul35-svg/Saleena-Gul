"use client"
import React from 'react'
import Image from "next/image"
import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa"
import { ExternalLink } from "lucide-react"

const projectsArray = [
    {
        title: "Moon Burger Restaurant",
        tech: "MERN Stack",
        description: "An interactive food ordering web app with a full checkout flow, built end-to-end on the MERN stack.",
        github: "https://github.com/saleenagul35-svg/Moon-Burger-Restaurant.git",
        live: "https://moon-burger-restaurant.vercel.app/",
        image: "/imgs/moon.png",
        featured: true,
    },
    {
        title: "Library Management System",
        tech: "MERN Stack",
        description: "A smart library system that replaces manual record-keeping — issuing, returns, and search, all automated.",
        github: "https://github.com/saleenagul35-svg/Library-Management-System.git",
        live: "https://library-management-system-psi-six.vercel.app/",
        image: "/imgs/library.png",
        featured: true,
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
        title: "React To-Do App",
        tech: "React, Tailwind CSS",
        description: "Modern task management application.",
        github: "https://github.com/saleenagul35-svg/Todo-list-app.git",
        live: "https://todo-list-app-three-opal.vercel.app/",
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
    {
        title: "Project Management Dashboard",
        tech: "HTML, CSS, JavaScript",
        description: "Interactive task and workflow dashboard.",
        github: "https://github.com/saleenagul35-svg/Project-management-dashboard.git",
        live: "https://saleenagul35-svg.github.io/Project-management-dashboard/",
        image: "/imgs/Dashboard.png",
    },
    {
        title: "Mythical Creature Explorer",
        tech: "HTML, CSS, JavaScript",
        description: "An interactive web app to explore mythical creatures.",
        github: "https://github.com/saleenagul35-svg/Mythical-Creatures-Explorer.git",
        live: "https://saleenagul35-svg.github.io/Mythical-Creatures-Explorer/",
        image: "/imgs/Mythical-Creature-Explorer.png",
    },
    {
        title: "Burger Builder App",
        tech: "HTML, CSS, JavaScript",
        description: "A dynamic burger customization application.",
        github: "https://github.com/saleenagul35-svg/Burger-Builder.git",
        live: "https://saleenagul35-svg.github.io/Burger-Builder/",
        image: "/imgs/Burger-Builder.png",
    },
    {
        title: "Daraz Ecommerce Website",
        tech: "HTML, CSS",
        description: "Daraz website clone.",
        github: "https://github.com/saleenagul35-svg/Daraz.git",
        live: "https://saleenagul35-svg.github.io/Daraz/",
        image: "/imgs/daraz.png",
    },
    {
        title: "PNY Trainings Website",
        tech: "HTML, CSS",
        description: "PNY Trainings website clone.",
        github: "https://github.com/saleenagul35-svg/PNY-Trainings.git",
        live: "https://pnytrainingswebsite.netlify.app/",
        image: "/imgs/pny.png",
    },
]

const featuredProjects = projectsArray.filter((p) => p.featured)
const gridProjects = projectsArray.filter((p) => !p.featured)

const containerVariants = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.12 },
    },
}

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
}

const Projects = () => {
    return (
        <section className="flex justify-center mt-20 px-4" id="projects">
            <div
                className="w-full max-w-6xl bg-[#FAF1ED] rounded-[40px]
                py-14 px-6 md:px-12
                flex flex-col gap-12
                shadow-lg shadow-black-200"
            >
                {/* Heading */}
                <div className="flex flex-col items-center gap-3 text-center">
                    <span className="uppercase tracking-[0.3em] text-xs font-semibold text-[#f4593a]">
                        My Work
                    </span>
                    <h1
                        className="text-transparent bg-clip-text bg-linear-to-br
                        from-[#f6aa74] via-[#f8c5bb] to-[#f4593a]
                        text-4xl md:text-5xl lg:text-6xl font-bold"
                    >
                        Projects
                    </h1>
                    <p className="text-[#5c4a45]/70 max-w-lg text-sm md:text-base">
                        A mix of full-stack builds and frontend explorations — each one solving a real problem, end to end.
                    </p>
                </div>

                {/* Featured MERN projects */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {featuredProjects.map((project) => (
                        <motion.a
                            key={project.title}
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={cardVariants}
                            whileHover={{ y: -6 }}
                            className="group relative overflow-hidden rounded-3xl bg-white
                            flex flex-col shadow-md shadow-black/5
                            hover:shadow-2xl hover:shadow-[#f9a59d]/40 transition-shadow duration-300"
                        >
                            <div className="relative w-full aspect-video overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <span className="absolute top-4 left-4 bg-[#f4593a] text-white text-[10px]
                                font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
                                    Full Stack
                                </span>
                            </div>
                            <div className="flex flex-col gap-2 p-6">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-bold text-[#3a2c28]">{project.title}</h3>
                                    <div className="flex items-center gap-3 text-[#3a2c28]">
                                        <FaGithub 
                                            size={18}
                                            className="hover:text-[#f4593a] transition-colors"
                                            onClick={(e) => {
                                                e.preventDefault()
                                                window.open(project.github, "_blank")
                                            }}
                                        />
                                        <ExternalLink size={18} className="group-hover:text-[#f4593a] transition-colors" />
                                    </div>
                                </div>
                                <span className="text-xs font-medium text-[#f4593a]">{project.tech}</span>
                                <p className="text-sm text-[#5c4a45]/80">{project.description}</p>
                            </div>
                        </motion.a>
                    ))}
                </motion.div>

                {/* Remaining projects grid — uniform aspect ratio, no distortion regardless of source orientation */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
                >
                    {gridProjects.map((project) => (
                        <motion.a
                            key={project.title}
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={cardVariants}
                            whileHover={{ y: -5, scale: 1.03 }}
                            className="group relative aspect-square overflow-hidden rounded-2xl
                            shadow-md shadow-black/5 hover:shadow-xl hover:shadow-[#f9a59d]/40
                            transition-shadow duration-300"
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            {/* Hover overlay */}
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                flex flex-col justify-end p-4"
                            >
                                <h4 className="text-white text-sm font-bold leading-tight">{project.title}</h4>
                                <span className="text-[#f8c5bb] text-[11px] font-medium mb-2">{project.tech}</span>
                                <div className="flex items-center gap-3">
                                    <FaGithub 
                                        size={16}
                                        className="text-white hover:text-[#f4593a] transition-colors"
                                        onClick={(e) => {
                                            e.preventDefault()
                                            window.open(project.github, "_blank")
                                        }}
                                    />
                                    <ExternalLink size={16} className="text-white hover:text-[#f4593a] transition-colors" />
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Projects