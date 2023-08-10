import Button from '@/Components/Common/Button'
import Container from '@/Components/Common/Container'
import Image from 'next/image'
import React from 'react'

const Social = () => {
    return (
        <section className='social-bg py-10'>
            <Container>
                <div className='flex justify-between py-10'>
                    <h2 className='text-5xl font-bold text-primary'>Get Social With Us</h2>
                    <Button text={'Explore Our Instagram'} display={''} />
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 py-10'>
                    {data.map((item, index) => {
                        return (
                            <Image key={index} className={''} src={item.img} alt={'card-img'} width={500} height={500} />
                        )
                    })}
                </div>
            </Container>
        </section>
    )
}

export default Social


const data = [
    {
        img: '/cityview.png'
    },
    {
        img: '/cityview.png'
    },
    {
        img: '/cityview.png'
    },
    {
        img: '/cityview.png'
    },
    {
        img: '/cityview.png'
    },
    {
        img: '/cityview.png'
    },
    {
        img: '/cityview.png'
    },
    {
        img: '/cityview.png'
    },
]