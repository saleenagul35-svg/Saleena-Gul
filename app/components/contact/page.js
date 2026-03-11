"use client"
import React from 'react'
import { motion } from "framer-motion"
import Image from "next/image"
import contact from "../../../public/imgs/contact.png"

const Contact = () => {
    return (
        <>
            <section className='flex justify-center mt-20 px-4' id='contact'>

                <motion.div className='w-full max-w-6xl bg-[#FAF1ED] rounded-[40px] 
                py-12 px-6 md:px-10 flex flex-col justify-center items-center 
                gap-10 shadow-lg shadow-black-200'>

                    <div className='flex flex-col justify-center items-center gap-3 text-center'>
                        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-br from-[#f6aa74] via-[#f8c5bb] to-[#f4593a]'>
                            Get In Touch
                        </h1>

                        <p className='text-base md:text-lg text-gray-700'>
                            Feel free to reach out for collaboration or opportunities
                        </p>
                    </div>


                    <div className='flex flex-col lg:flex-row gap-12 lg:gap-24 justify-center items-center'>

                        <motion.div
                            initial={{ scale: 0.2, opacity: 0 }}
                            whileInView={{ scale: 1.75, opacity: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6 }}
                            className='h-64 w-64 md:h-80 md:w-80 flex justify-center'
                        >
                            <Image
                                src={contact}
                                alt='contact'
                                className='rounded-[100px] object-contain'
                            />
                        </motion.div>


                        <div className='flex flex-col gap-6 w-full max-w-sm'>
                            <h1 className='text-lg font-medium'>Contact Information</h1>

                            <div className='flex gap-4'>
                                <div className='p-4 rounded-2xl bg-[#f8e4da]'>📧</div>
                                <div className='flex flex-col gap-1'>
                                    <p className='text-gray-700'>Email</p>
                                    <a
                                        href='https://mail.google.com/mail/?view=cm&fs=1&to=saleenagul35@gmail.com'
                                        target='_blank'
                                        className='hover:text-[#ff6659] break-all'
                                    >
                                        saleenagul35@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className='flex gap-4'>
                                <div className='p-4 rounded-2xl bg-[#f8e4da]'>📞</div>
                                <div className='flex flex-col gap-1'>
                                    <p className='text-gray-700'>Phone</p>
                                    <p className='hover:text-[#ff6659]'>0341-7309859</p>
                                </div>
                            </div>

                            <div className='flex gap-4'>
                                <div className='p-4 rounded-2xl bg-[#f8e4da]'>📍</div>
                                <div className='flex flex-col gap-1'>
                                    <p className='text-gray-700'>Location</p>
                                    <p className='hover:text-[#ff6659]'>Iqbal Town, Lahore</p>
                                </div>
                            </div>

                            <div className='flex gap-4'>
                                <div className='p-4 rounded-2xl bg-[#f8e4da]'>🔗</div>
                                <div className='flex flex-col gap-1'>
                                    <p className='text-gray-700'>LinkedIn</p>
                                    <a
                                        href='http://www.linkedin.com/in/saleena-gul'
                                        target='_blank'
                                        className='hover:text-[#ff6659] break-all'
                                    >
                                        linkedin.com/in/saleena-gul
                                    </a>
                                </div>
                            </div>

                        </div>

                    </div>

                </motion.div>

            </section>
        </>
    )
}

export default Contact