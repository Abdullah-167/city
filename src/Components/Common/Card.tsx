import { FC } from "react"
import Image from 'next/image'
import { Parallax } from 'react-scroll-parallax';

interface CardProps {
    image?: any;
    tag?: string;
    title: string;
    buttonTitle: string;
    seccolor: string;
    fontweight: string;
    display: string;
    visible: string;
    gap: string;
    alignItems: string;
    secFontweight: any;
    secFontSize: any;
    show: string;
    imgMaxHeight: string;
    width: any;
    outerImg: string;
    minHeight: string;
    speed: any;
    btnText: any
}

const Card: FC<CardProps> = ({ image, tag = "tag", title = "title", seccolor, fontweight, display, btnText, gap, alignItems, secFontweight, show, imgMaxHeight, width, outerImg, minHeight, }: CardProps) => {

    return (
        <div
            className=""
            style={
                {
                    display: display,
                    gap: gap,
                    alignItems: alignItems,
                }
            }
        >
            <div className="flex justify-center overflow-hidden">
                <div
                    style={
                        {
                            display: show,
                            maxHeight: outerImg,
                        }
                    }
                    className={`transition-all duration-500 transform-gpu hover:scale-105 pb-4`}>
                    <Image
                        style={
                            {
                                maxHeight: imgMaxHeight,
                                minWidth: width,
                                minHeight: minHeight
                            }
                        }
                        className={`object-cover`}
                        src={image} width={1000} height={100} alt={tag} />
                </div>
            </div>
            <div className='pb-3'>
                <button className="border border-black rounded-full px-2 py-[1px] text-sm font-light cursor-pointer mb-2">
                    {btnText}
                </button>
                <p className=''
                    style={
                        {
                            color: seccolor,
                            fontWeight: fontweight
                        }
                    }
                >
                    {title}
                </p>
            </div>
        </div>
    )
}

export default Card