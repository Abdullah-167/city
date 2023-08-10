import * as React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Container from '@/Components/Common/Container'
import Image from "next/image"
import { useState } from "react"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const Discover = () => {

    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({

        slides: {
            perView: 2,
            spacing: 10,

        },

        breakpoints: {
            "(max-width: 768px)": {
                slides: 2,
            },
            "(max-width: 480px)": {
                slides: 1,
            },
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },

    })

    return (
        <section className=" relative py-10 overflow-hidden">
            <div className="flex gap-8 items-center justify-between">
                <div className="flex flex-col pl-52 max-w-[600px]">
                    <h2 className='text-primary text-3xl sm:text-5xl font-extrabold pb-5'>Discover Downtown LA</h2>
                    <p className="text-black pb-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum.</p>
                    <div className="text-white">
                        {loaded && instanceRef.current && (
                            <div className="flex gap-4">
                                <span className="">
                                    <Arrow
                                        left
                                        onClick={(e: any) =>
                                            e.stopPropagation() || instanceRef.current?.prev()
                                        }
                                        disabled={currentSlide === 0}
                                    />
                                </span>

                                <Arrow
                                    onClick={(e: any) =>
                                        e.stopPropagation() || instanceRef.current?.next()
                                    }
                                    disabled={
                                        currentSlide ===
                                        instanceRef.current.track.details.slides.length - 1
                                    }
                                />
                            </div>
                        )}
                    </div>
                </div>
                <div ref={sliderRef} className="keen-slider max-w-[550px] overflow-hidden -mr-20">
                    {data.map((item, index) => {
                        return (
                            <div key={index} className="keen-slider__slide relative">
                                <Image className="h-[250px]" src={item.img} alt={"slider-images"} width={1000} height={1000} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Discover;



const data = [
    {
        img: '/surf.png',
        text: 'New York City, NY'
    },
    {
        img: '/surf.png',
        text: 'London, UK'
    },
    {
        img: '/surf.png',
        text: 'New York City, NY'
    },
    {
        img: '/surf.png',
        text: 'Best Overall'
    },
    {
        img: '/surf.png',
        text: 'Best Overall'
    },
    {
        img: '/surf.png',
        text: 'Best Overall'
    },
    {
        img: '/surf.png',
        text: 'Best Overall'
    },
    {
        img: '/surf.png',
        text: 'Best Overall'
    },

]



function Arrow(props: any) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
        <div onClick={props.onClick}
            className={`max-w-[40px]  rounded-full p-3 cursor-pointer flex justify-center items-center ${props.left ? "arrow--left bg-tertiary" : "arrow--right -right-4 bg-primary"
                } ${disabeld}`}
        >
            {props.left && (
                <span>  <AiOutlineArrowLeft /> </span>
            )}
            {!props.left && (
                <span> <AiOutlineArrowRight /></span>
            )}
        </div>
    )
}