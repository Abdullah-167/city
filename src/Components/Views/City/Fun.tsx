import * as React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Container from '@/Components/Common/Container'
import Image from "next/image"
import { useState } from "react"
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';


const Fun = () => {

    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({
        slides: {
            perView: 3,
            spacing: 10,

        },

        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },

    })

    return (
        <Container>
            <section className=" relative sm:pb-32">
                <h2 className='text-3xl sm:text-5xl text-primary font-extrabold pb-16'>Fun Things to Do</h2>
                <div ref={sliderRef} className="keen-slider max-w-[800px] mx-auto">
                    {data.map((item, index) => {
                        return (
                            <div key={index} className="keen-slider__slide">
                                <Image className="h-[431px] object-cover" src={item.img} alt={"slider-images"} width={1000} height={1000} />
                                <p className="text-white text-center font-bold py-1">{item.text}</p>
                            </div>
                        )
                    })}

                </div>
                {loaded && instanceRef.current && (
                    <>
                        <span className="max-w-[30px]">
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
                    </>
                )}
            </section>
        </Container>
    )
}

export default Fun;



const data = [
    {
        img: '/cityview.png',
        text: 'Best Overall'
    },
    {
        img: '/cityview.png',
        text: 'Best Overall'
    },
    {
        img: '/cityview.png',
        text: 'Best Overall'
    },
    {
        img: '/cityview.png',
        text: 'Best Overall'
    },
    {
        img: '/cityview.png',
        text: 'Best Overall'
    },
    {
        img: '/cityview.png',
        text: 'Best Overall'
    },
    {
        img: '/cityview.png',
        text: 'Best Overall'
    },
    {
        img: '/cityview.png',
        text: 'Best Overall'
    },
    {
        img: '/cityview.png',
        text: 'Best Overall'
    },
]



function Arrow(props: any) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
        <div onClick={props.onClick}
            className={`max-w-[40px] bg-primary text-white rounded-full p-3 cursor-pointer flex justify-center items-center absolute ${props.left ? "arrow--left left-10 top-[310px]" : "arrow--right right-10 top-[310px] "
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