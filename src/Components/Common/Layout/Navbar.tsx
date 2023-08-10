import React, { useEffect, useState } from 'react'
import Container from '../Container'
import Image from 'next/image'
import Button from '../Button'
import Link from 'next/link'
import { CgMenuLeft } from 'react-icons/cg';
import { RxCross1 } from 'react-icons/rx';

const Navbar = () => {

    const [toggelTab, setToggelTab] = useState(false);

    const handleMenu = () => {
        setToggelTab(!toggelTab)
    }


    useEffect(() => {
        if (toggelTab) {
            document.body.classList.add('modal-open')
        } else {
            document.body.classList.remove('modal-open')

        }
    }, [toggelTab])


    return (
        <nav className='bg-primary py-4'>
            <Container>
                <div className='flex justify-between items-center'>
                    <div>
                        <Link href={'/'}> <Image src={'/logo.svg'} alt={'logo'} width={60} height={60} /> </Link>
                    </div>
                    <div className='hidden md:flex gap-16 items-center'>
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
                    <div className={` text-white cursor-pointer md:hidden ${toggelTab ? 'text-3xl' : 'text-4xl'}`}
                        onClick={() => handleMenu()}
                    >
                        {toggelTab ? (
                            <RxCross1 />
                        ) :
                            <CgMenuLeft />

                        }
                    </div>
                    <div className={`bg-primary w-full h-full absolute py-10 top-16 transition-all duration-700 shadow-2xl text-white z-[1000] ${toggelTab ? ' -translate-x-5 block' : ' -translate-x-[500px] opacity-0'}`}>
                        {toggelTab && (
                            <div className='flex flex-col gap-16 items-center'>
                                <ul className='flex flex-col gap-6 text-white text-xl'>
                                    <li className='cursor-pointer'>Trip</li>
                                    <li className='cursor-pointer'>Cities</li>
                                    <li className='cursor-pointer'>Discover</li>
                                    <li className='cursor-pointer'>Community</li>
                                </ul>
                                <span>
                                    <Button text={'Contact us'} display={'none'} />
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </Container>
        </nav>
    )
}

export default Navbar