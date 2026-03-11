"use client"
import React from 'react'
import { motion } from "framer-motion"

const educationData = [
    {
        title: "MERN Stack",
        institute: "PNY Trainings – Arfa Tower, Lahore",
        duration: "August 2025 – Present",
        description:
            "Currently advancing my frontend expertise and building strong backend & database development skills.",
    },
    {
        title: "BS Computer Science",
        institute: "Virtual University of Pakistan",
        duration: "2023 – Present",
        Grade: "CGPA: 3.72",
    },
    {
        title: "Intermediate",
        institute: "Zakriya Girls College, Alipur",
        duration: "2021 – 2022 ",
        Grade: "90.3%",
    },
    {
        title: "Matriculation",
        institute: "Government Girls High School Nalka Adda, Alipur",
        duration: "2019 – 2020 ",
        Grade: "96.6%",
    },
];

const Education = () => {
    return (
        <>
            <section className='flex justify-center mt-20 px-4' id='education'>

                <motion.div className='w-full max-w-6xl bg-[#fcf4f0] rounded-[40px] 
                py-12 px-6 md:px-10 flex flex-col justify-center items-center 
                gap-12 shadow-lg shadow-black-200'>

                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold flex gap-3 md:gap-5 flex-wrap justify-center'>
                        <span className='text-black'>My</span>
                        <span className='text-transparent bg-clip-text bg-linear-to-br from-[#f6aa74] via-[#f8c5bb] to-[#f4593a]'>
                            Education
                        </span>
                    </h1>

                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full'>
                        {educationData.map((arr, i) =>

                            <motion.div
                                key={i}
                                initial={{ y: 100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: false }}
                                whileHover={{ y: -5, scale: 1.05, boxShadow: "0px 0px 25px #f9a59d" }}
                                className='w-full bg-[#ffffff] p-5 rounded-2xl flex flex-col gap-5'
                            >

                                <p className='text-[#ff6659]'>{arr.duration}</p>

                                <h1 className='text-lg font-semibold'>
                                    {arr.title}
                                </h1>

                                <p className='text-sm text-gray-600 min-h-[32px]'>
                                    {arr.institute}
                                </p>

                                <p className='text-sm font-semibold'>
                                    {arr.Grade}
                                </p>

                            </motion.div>

                        )}
                    </div>

                </motion.div>

            </section>
        </>
    )
}

export default Education