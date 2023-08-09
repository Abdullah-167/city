import React from 'react'
import Hero from './Hero'
import HotToday from './HotToday'
import ByCat from './ByCat'
import Ultimate from './Ultimate'
import Explore from './Explore'
import TopDest from './Topdest'
import Beaches from './Beaches'

const Home = () => {
    return (
        <div>
            <Hero />
            <HotToday />
            <ByCat />
            <Ultimate />
            <Explore />
            <TopDest />
            <Beaches />
        </div>
    )
}

export default Home