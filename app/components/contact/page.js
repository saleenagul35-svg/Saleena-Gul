"use client"
import React from 'react'
import { motion } from "framer-motion"
import Image from "next/image"
import contact from "../../../public/imgs/contact.png"
const Contact = () => {
    return (
        <>
            <section className=' flex justify-center mt-20' id='contact'>
                <motion.div className='w-275 bg-[#f9efe5] rounded-[40px] h-135 flex flex-col justify-center items-center gap-10 shadow-lg shadow-black-200 '>
                    <div className='flex flex-col justify-center items-center gap-3'>
                        <h1 className=' text-5xl font-bold'>Get In Touch</h1>
                        <p className='text-xl text-gray-700'>Feel free to reach out for collaboration or opportunities</p>
                    </div>
                    <div className='flex gap-30 justify-center items-center '>

                        <div className=' h-100 w-100 bg-[#f9efe5] '>
                            <Image
                                src={contact}
                                alt='skills'
                                className='rounded-[100px] relative bottom-9 h-full'

                            />
                        </div>
                        <div className='flex flex-col gap-5 w-80'>
                            <h1 className='text-lg font-medium'>Contact Information</h1>
                            <div className='flex gap-4 '>
                                <div className='p-4 rounded-2xl bg-[#f8e4da]'>📧</div>
                                <div className='flex flex-col gap-1'>
                                    <p className='text-gray-700 '>Email</p>
                                    <a href='https://mail.google.com/mail/?view=cm&fs=1&to=saleenagul35@gmail.com' target='_blank' className='hover:text-[#ff6659]'>saleenagul35@gmail.com</a>

                                </div>
                            </div>
                            <div className='flex gap-4 '>
                                <div className='p-4 rounded-2xl bg-[#f8e4da]'>📞</div>
                                <div className='flex flex-col gap-1'>
                                    <p className='text-gray-700 '>Phone</p>
                                    <p className='hover:text-[#ff6659]'>0341-7309859</p>

                                </div>
                            </div>
                            <div className='flex gap-4 '>
                                <div className='p-4 rounded-2xl bg-[#f8e4da]'>📍</div>
                                <div className='flex flex-col gap-1'>
                                    <p className='text-gray-700 '>Location</p>
                                    <p className='hover:text-[#ff6659]'>Iqbal Town, Lahore</p>

                                </div>
                            </div>
                            <div className='flex gap-4 '>
                                <div className='p-4 rounded-2xl bg-[#f8e4da]'>🔗</div>
                                <div className='flex flex-col gap-1'>
                                    <p className='text-gray-700 '>LinkedIn</p>
                                    <a href='http://www.linkedin.com/in/saleena-gul' target='_blank' className='hover:text-[#ff6659]'>linkedin.com/in/saleena-gul</a>

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
