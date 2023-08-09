import React from 'react'

const Container = ({ children }: any) => {
    return (
        <div className='max-w-[1150px] mx-auto px-5'>
            {children}
        </div>
    )
}

export default Container