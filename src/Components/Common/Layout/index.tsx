import React from 'react'
import Navbar from './Navbar'

const Layout = ({ children }: any) => {
    return (
        <main>
            <Navbar />
            {children}
        </main>
    )
}

export default Layout