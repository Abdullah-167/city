import React from 'react'
import Hero from './Hero'
import Welcome from './Welcome';
import WhatHot from './WhatHot';
import Fun from './Fun';
import Discover from './Dscover';
import Best from './Best';
import Events from './Events';
import Places from './Places';
import La12 from './La12';
import Social from '../Home/Social';

const City = () => {
    return (
        <main>
            <Hero />
            <Welcome />
            <Fun />
            <Discover />
            <Best />
            <Events />
            <Places />
            <La12 />
            <Social />
        </main>
    )
}

export default City;