import * as React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Container from '@/Components/Common/Container'
import Image from "next/image"
import { useState } from "react"
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';

const ExMore = () => {

    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({

        slides: {
            perView: 3,
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
        <section className=" relative py-32">
            <div className=" pt-10 mb-10 h-52 bg-[#FFC6F2] text-white ">
                <Container>
                    <div className="flex justify-between border-b-[2px] border-b-primary">
                        <h2 className='text-primary text-3xl sm:text-5xl font-extrabold pb-5'>Explore More Hotels</h2>
                        <div>
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
                </Container>
            </div>
            <Container>
                <div ref={sliderRef} className="keen-slider -mt-20">
                    {data.map((item, index) => {
                        return (
                            <div key={index} className="keen-slider__slide relative">
                                <Image src={item.img} alt={"slider-images"} width={1000} height={1000} />
                                <p className=" text-white absolute bottom-5 px-3 text-2xl text-center font-bold py-1">{item.text}</p>
                            </div>
                        )
                    })}
                </div>
            </Container>
        </section>
    )
}

export default ExMore;



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
            className={`max-w-[40px] bg-primary rounded-full p-3 cursor-pointer flex justify-center items-center ${props.left ? "arrow--left" : "arrow--right -right-4 "
                } ${disabeld}`}
        >
            {props.left && (
                <span>  <AiOutlineArrowLeft /> </span>
            )}
            {!props.left && (
                <AiOutlineArrowRight />
            )}
        </div>
    )
}