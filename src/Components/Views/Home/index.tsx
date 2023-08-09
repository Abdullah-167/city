import React from 'react'
import Hero from './Hero'
import HotToday from './HotToday'
import ByCat from './ByCat'
import Ultimate from './Ultimate'
import Explore from './Explore'

const Home = () => {
    return (
        <div>
            <Hero />
            <HotToday />
            <ByCat />
            <Ultimate />
            <Explore />
        </div>
    )
}

export default Home