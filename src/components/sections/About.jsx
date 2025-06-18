import React from 'react'
import Cards from '../ui/Card'

const About = () => {
    return (
        <section className='about'>
            <h2 className='text-[20px] leading-[100%] font-medium mb-[30px] text-[#0563AB]'>About</h2>
            <div className="flex items-center justify-between mb-[60px]">
                <h2 className='text-[65px] leading-[80px] font-semibold w-[546px]'>Solution for your business needs</h2>
                <p className='text-[18px] leading-[28px] w-[407px]'>We make logistic shipping much easier and straighforward. Combining good service and technology make everything efficient</p>
            </div>
            <div className="flex items-center justify-between">
                <Cards />
            </div>
        </section>
    )
}

export default About