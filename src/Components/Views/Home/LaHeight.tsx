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
                                <div className={`w-full max-w-[712px] text-white bg-primary py-20 lg:py-10 ${index === 1 ? 'lg:pr-10 lg:pl-20 px-5 lg:px-0' : 'lg:pl-10 lg:pr-20 px-5 lg:px-0'}`}>
                                    <h2 className='text-3xl sm:text-4xl pb-4 sm:pb-5 font-bold'>{item.header}</h2>
                                    <p className='pb-5 text-sm sm:text-base max-w-[409px]'>{item.para}</p>
                                    <Button text={item.btnText} display={'none'} />
                                </div>
                                <div className='w-full lg:max-w-[451px] shadow-xl -m-12 lg:-m-10'>
                                    <Image className='lg:max-h-[326px] object-cover' src={item.img} alt={'card-img'} width={1000} height={600} />
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
        para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid reprehen.',
        btnText: 'Explore Beaches'
    },
    {
        img: '/beasces.png',
        header: 'Water Sports',
        para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid reprehen.',
        btnText: 'Explore Beaches'
    },
    {
        img: '/beasces.png',
        header: 'Water Sports',
        para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid reprehen.',
        btnText: 'Explore Beaches'
    },
]