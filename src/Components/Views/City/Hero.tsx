import Button from '@/Components/Common/Button'
import Image from 'next/image'
import { motion } from 'framer-motion';
import React from 'react'
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';

const Hero = () => {
    return (
        <header className='relative'>
            <div className='relative max-h-[550px]'>
                <Image className=' flex justify-center mx-auto max-h-[550px] object-cover' src={'/cityview.png'} alt={''} width={5000} height={1000} />
                <span className='bg-black bg-opacity-25 w-full h-full absolute top-0'></span>
                <div className='absolute top-0 bg-white bg-opacity-20 w-full  z-[900] py-2'>
                    <div className='flex justify-center items-center gap-6 overflow-hidden overflow-x-scroll srollBar'>
                        <Button text={'Explore'} display={'none'} />
                        <ul className='flex gap-7 items-center font-bold text-primary text-2xl'>
                            <li className=' cursor-pointer'>EAT & DRINKS</li>
                            <li className=' cursor-pointer'>PLACES TO STAY</li>
                            <li className=' cursor-pointer'>EVENTS</li>
                        </ul>
                        <span className='text-2xl cursor-pointer text-primary font-bold'>
                            <HiOutlineMagnifyingGlass />
                        </span>
                    </div>
                </div>
                <h1 className="text-5xl md:text-8xl text-white z-[800] font-bold md:leading-[100px] text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <motion.span
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5 }}
                    >
                        Welcome to
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, }}
                    >
                        {' '}
                        New York City{' '}
                    </motion.span>
                </h1>
            </div>
        </header>
    )
}

export default Hero