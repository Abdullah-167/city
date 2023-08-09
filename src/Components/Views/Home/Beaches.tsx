import Button from '@/Components/Common/Button'
import Container from '@/Components/Common/Container'
import Image from 'next/image'
import React from 'react'

const Beaches = () => {
    return (
        <section>
            <Container>
                <div>
                    {data.map((item, index) => {
                        return (
                            <div key={index} className={`flex flex-wrap lg:flex-nowrap items-center py-12 ${index === 1 ? ' flex-row-reverse' : ' flex-row'}`}>
                                <div>
                                    <Image className='lg:max-w-[624px] max-h-[417px] object-cover' src={item.img} alt={'card-img'} width={1000} height={600} />
                                </div>
                                <div className='bg-white w-full lg:max-w-[451px] shadow-xl pt-10 pb-20 px-10  -m-12 lg:-m-10 max-h-[326px]'>
                                    <h2 className='text-3xl sm:text-4xl text-primary pb-4 sm:pb-5 font-bold'>{item.header}</h2>
                                    <p className='pb-5 text-sm sm:text-base'>{item.para}</p>
                                    <Button text={item.btnText} display={'none'} />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </Container>
        </section>
    )
}

export default Beaches;


const data = [
    {
        img: '/beasces.png',
        header: 'Water Sports',
        para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum. Maxime mollitia,molestiae quas vel sint.',
        btnText: 'Explore Beaches'
    },
    {
        img: '/beasces.png',
        header: 'Water Sports',
        para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum. Maxime mollitia,molestiae quas vel sint.',
        btnText: 'Explore Beaches'
    },
    {
        img: '/beasces.png',
        header: 'Water Sports',
        para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum. Maxime mollitia,molestiae quas vel sint.',
        btnText: 'Explore Beaches'
    },
]