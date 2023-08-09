import React from 'react'
import Container from '../Container'
import Image from 'next/image'
import Button from '../Button'

const Navbar = () => {
    return (
        <nav className='bg-primary py-4'>
            <Container>
                <div className='flex justify-between items-center'>
                    <div>
                        <Image src={'/logo.svg'} alt={'logo'} width={60} height={60} />
                    </div>
                    <div className='flex gap-16 items-center'>
                        <ul className='flex gap-10 text-white text-xl'>
                            <li className=' cursor-pointer'>Trip</li>
                            <li className=' cursor-pointer'>Cities</li>
                            <li className=' cursor-pointer'>Discover</li>
                            <li className=' cursor-pointer'>Community</li>
                        </ul>
                        <span>
                            <Button text={'Contact us'} display={'none'} />
                        </span>
                    </div>
                </div>
            </Container>
        </nav>
    )
}

export default Navbar