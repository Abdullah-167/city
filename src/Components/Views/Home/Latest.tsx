import Container from '@/Components/Common/Container'
import Image from 'next/image'
import React from 'react'

const Latest = () => {
    return (
        <section>
            <Container>
                <div>
                    <h2 className='text-5xl text-primary font-bold pb-10'>Latest News</h2>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                        {data.map((item, index) => {
                            return (
                                <div className='colr-change flex sm:flex-row flex-col items-center gap-4 border-b-[1.5px] border-b-primary hover:border-b-[#EF46CA] transition-all duration-300  pb-5'>
                                    <Image src={item.img} alt={'blog-img'} width={600} height={600} />
                                    <div>
                                        <h2 className='text-2xl font-bold text-primary cursor-pointer'>
                                            {item.heading}
                                        </h2>
                                        <span className='text-[#EF46CA]'>{item.date}</span>
                                        <p>{item.para}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Latest


const data = [
    {
        img: '/cityview.png',
        heading: 'Lorem Ipsum',
        date: '18 July 2023',
        para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum...'
    },
    {
        img: '/cityview.png',
        heading: 'Lorem Ipsum',
        date: '18 July 2023',
        para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum...'
    },
    {
        img: '/cityview.png',
        heading: 'Lorem Ipsum',
        date: '18 July 2023',
        para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum...'
    },
    {
        img: '/cityview.png',
        heading: 'Lorem Ipsum',
        date: '18 July 2023',
        para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum...'
    },
    {
        img: '/cityview.png',
        heading: 'Lorem Ipsum',
        date: '18 July 2023',
        para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum...'
    },
    {
        img: '/cityview.png',
        heading: 'Lorem Ipsum',
        date: '18 July 2023',
        para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum...'
    },
    {
        img: '/cityview.png',
        heading: 'Lorem Ipsum',
        date: '18 July 2023',
        para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum...'
    },
    {
        img: '/cityview.png',
        heading: 'Lorem Ipsum',
        date: '18 July 2023',
        para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum...'
    },
]