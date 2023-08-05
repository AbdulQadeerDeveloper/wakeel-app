import React from 'react'
import { AboutWakeel, ConnectWithUs, Feature, HeroSection, OnlineDealings, Services } from '../Components'

const Home = () => {
    return (
        <div>
            {/* Hero Section Here */}
            <HeroSection />

            {/* About Wakeel Section Here */}
            <AboutWakeel />

            {/* Features Section */}
            <Feature />

            {/* Services of Wakeel */}
            <Services />

            {/* Online Dealings */}
            <OnlineDealings />

            {/* Connect with Wakeel */}
            <ConnectWithUs />
        </div>
    )
}

export default Home