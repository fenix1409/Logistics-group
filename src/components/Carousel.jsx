import React from 'react'
import Header from './sections/Header'
import Hero from './sections/Hero'
import About from './sections/About'
import Advantages from './sections/Advantages'
import Services from './sections/Services'
import FAQs from './sections/FAQs'

const Carousel = () => {
    return (
        <main>
            <Header />
            <Hero />
            <About />
            <Advantages />
            <Services />
            <FAQs />
        </main>
    )
}

export default Carousel