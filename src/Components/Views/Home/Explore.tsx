import Container from '@/Components/Common/Container'
import Image from 'next/image'
import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai';

const Explore = () => {
    return (
        <section className='bg-primary py-20'>
            <Container>
                <div className='flex text-white justify-between pb-7'>
                    <h2 className='text-3xl sm:text-5xl font-bold'>More to Explore</h2>
                    <div className='smtext-lg flex gap-1 sm:gap-2 items-center cursor-pointer'>
                        <span>View all</span>
                        <span><Image src={'/arrow.svg'} alt={''} width={25} height={25} /></span>
                    </div>
                </div>
                <div className='flex justify-center flex-wrap md:flex-nowrap gap-5'>
                    {data.map((item, index) => {
                        return (
                            <div className=' relative' key={index}>
                                <Image className='w-full' src={item.img} alt={'card-img'} width={500} height={500} />
                                <span className='bg-white absolute top-4 right-4 rounded-full w-8 h-8 flex  justify-center items-center cursor-pointer text-xl'>{item.icon}</span>
                                <p className='text-base text-center bg-white px-4 py-4'>{item.text}</p>
                            </div>
                        )
                    })}
                </div>
            </Container>
        </section>
    )
}

export default Explore



const data = [
    {
        img: '/surf.png',
        icon: <AiOutlineHeart />,
        text: 'Where should you and your family go next? The Tripadvisor community weighs in.'
    },
    {
        img: '/surf.png',
        icon: <AiOutlineHeart />,
        text: 'Where should you and your family go next? The Tripadvisor community weighs in.'
    },
    {
        img: '/surf.png',
        icon: <AiOutlineHeart />,
        text: 'Where should you and your family go next? The Tripadvisor community weighs in.'
    },
]