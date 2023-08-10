import Container from '@/Components/Common/Container'
import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi';
import Image from 'next/image';


const Welcome = () => {
    return (
        <section className='py-20'>
            <Container>
                <h2 className='text-6xl text-center font-bold text-primary max-w-[968px] mx-auto pb-20'>WE LOOK FORWARD TO WELCOMING YOU</h2>
                <div className='py-10'>
                    <h1 className='text-3xl sm:text-5xl text-primary font-bold pb-20'>What's Hot Today</h1>
                    <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-10'>
                        {data.map((item, index) => {
                            return (
                                <div className='max-w-[360px]' key={index}>
                                    <Image className='pb-5' src={item.img} alt={'card-img'} width={500} height={500} />
                                    <div className='flex text-primary hover:text-[#0e090c] justify-between font-bold items-center text-[32px] border-b border-b-primary hover:border-b-[#EF46CA] pb-1 mb-4 cursor-pointer transition-all duration-300'>
                                        <h2 className=''>{item.heading}</h2>
                                        <span>{item.icon}</span>
                                    </div>
                                    <button className="border border-black hover:border-[#EF46CA] hover:text-[#EF46CA] transition-all duration-300 rounded-full px-2 py-[1px] text-sm font-light cursor-pointer mb-4">
                                        {item.catBtn}
                                    </button>
                                    <p>{item.text}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Welcome;


const data = [
    {
        img: '/cityview.png',
        icon: <FiArrowUpRight />,
        catBtn: 'Automotive',
        heading: 'Lorem Ipsum',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum.',
    },
    {
        img: '/cityview.png',
        icon: <FiArrowUpRight />,
        catBtn: 'Automotive',
        heading: 'Lorem Ipsum',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum.',
    },
    {
        img: '/cityview.png',
        icon: <FiArrowUpRight />,
        catBtn: 'Automotive',
        heading: 'Lorem Ipsum',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum.',
    },
    {
        img: '/cityview.png',
        icon: <FiArrowUpRight />,
        catBtn: 'Automotive',
        heading: 'Lorem Ipsum',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum.',
    },
    {
        img: '/cityview.png',
        icon: <FiArrowUpRight />,
        catBtn: 'Automotive',
        heading: 'Lorem Ipsum',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum.',
    },
    {
        img: '/cityview.png',
        icon: <FiArrowUpRight />,
        catBtn: 'Automotive',
        heading: 'Lorem Ipsum',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum.',
    },
]