import Container from '@/Components/Common/Container'
import Image from 'next/image'
import React from 'react'

const Ultimate = () => {
    return (
        <Container>
            <section className='relative mb-20'>
                <Image className='w-full sm:max-h-[500px] object-cover' src={'/girl.jpg'} alt={''} width={1000} height={500} />
                <div className='absolute inset-0 flex items-center justify-center'>
                    <div className='w-full h-full bg-black opacity-20 shadow-inner' />
                </div>
                <div className='absolute text-white  bottom-10 z-[1000] px-6 '>
                    <h2 className='text-3xl sm:text-5xl font-semibold pb-2'>The ultimate family travel guide</h2>
                    <p className='font-medium sm:text-xl pb-3'>An inspo packaged for getting your next trip into gear</p>
                    <button className='bg-white text-black px-4 py-1.5 rounded-full'>
                        Read More
                    </button>
                </div>
            </section>
        </Container>
    )
}

export default Ultimate