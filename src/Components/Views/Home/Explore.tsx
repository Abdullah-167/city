import Container from '@/Components/Common/Container'
import Image from 'next/image'
import React from 'react'

const Explore = () => {
    return (
        <section className='bg-primary'>
            <Container>
                <div className='flex text-white justify-between'>
                    <h2 className='text-5xl font-bold'>More to Explore</h2>
                    <div className='text-xl flex gap-3 items-center'>
                        <span>View all</span>
                        <span><Image src={'/arrow.svg'} alt={''} width={30} height={30} /></span>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Explore