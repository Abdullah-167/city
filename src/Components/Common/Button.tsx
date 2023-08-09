import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi';

const Button = ({ text, display }: any) => {
    return (
        <button className='flex gap-3 items-center bg-[#EF46CA] text-white text-xl px-4 py-2 rounded-[3px]'>
            <span>
                {text}
            </span>
            <span
                className={``}
                style={{
                    display: display,
                }}
            >
                <FiArrowUpRight />
            </span>
        </button>
    )
}

export default Button