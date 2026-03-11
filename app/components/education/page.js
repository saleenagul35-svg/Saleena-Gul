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
        Grade:
            "CGPA: 3.72",
    },
    {
        title: "Intermediate",
        institute: "Zakriya Girls College, Alipur",
        duration: "2021 – 2022 ",
        Grade:
            "90.3%",
    },
    {
        title: "Matriculation",
        institute:
            "Government Girls High School Nalka Adda, Alipur",
        duration: "2019 – 2020 ",
        Grade:
            "96.6%",
    },
];

const Education = () => {
    return (
        <>
            <section className='flex justify-center mt-20' id='education'>
                <motion.div className='w-275 bg-[#fcf4f0] rounded-[40px] h-120 flex flex-col justify-center items-center gap-25 shadow-lg shadow-black-200 '>
                    <h1 className='text-[#ff6659] text-5xl font-bold flex gap-5'><span className='text-black'>My</span><span>Education</span></h1>
                    <div className='flex gap-6'>
                    {educationData.map((arr,i) =>
                        <motion.div key={i} className='w-60 bg-[#ffffff] p-5 rounded-2xl flex flex-col gap-5' whileHover={{y:-3,scale:1.05, boxShadow:"0px 0px 25px #f9a59d"}}>
                            <p className='text-[#ff6659]'>{arr.duration}</p>
                            <h1 className='text-lg font-semibold'>{arr.title}</h1>
                            <p className='text-sm  h-8 text-gray-600'>{arr.institute}</p>
                            <p className='text-sm font-semibold'>{arr.Grade}</p>
                        </motion.div>
                    )}
                    </div>
                </motion.div>
            </section>
        </>
    )
}

export default Education
