import * as React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Container from '@/Components/Common/Container'
import Image from "next/image"
import { useState } from "react"


const TopDest = () => {

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
        <Container>
            <section className=" relative py-32">
                <h2 className='text-3xl sm:text-5xl text-primary font-extrabold pb-5'>Top Things to Do By Category</h2>
                <p className='text-xl max-w-[492px] pb-16'>{`Travelers' Choice Best of the Best Locations Within the United State`}s</p>
                <div ref={sliderRef} className="keen-slider">
                    {data.map((item, index) => {
                        return (
                            <div key={index} className="keen-slider__slide relative">
                                <Image src={item.img} alt={"slider-images"} width={1000} height={1000} />
                                <p className=" text-white absolute bottom-5 px-3 text-2xl text-center font-bold py-1">{item.text}</p>
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

export default TopDest;



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
        <svg
            onClick={props.onClick}
            className={`max-w-[40px] bg-gray-500 bg-opacity-50 rounded-full p-3 cursor-pointer absolute ${props.left ? "arrow--left top-[420px] -left-4 z-[1000]" : "arrow--right top-[420px] -right-4 z-[1000]"
                } ${disabeld}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            {props.left && (
                <path fill="white" d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            )}
            {!props.left && (
                <path fill="white" d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            )}
        </svg>
    )
}