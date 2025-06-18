import React from 'react'
import Image from '../../assets/hero-img.png'
import FormData from '../ui/FormData'

const Hero = () => {
    return (
        <section className='px-[50px] flex justify-between my-[58px]'>
            <img src={Image} alt="Hero image" width={650} height={720} className='rounded-[30px] !h-[720px] !w-[650px] object-cover' />
            <div className="w-[516px]">
                <h1 className='text-[62px] leading-[100%] font-medium mb-[38px]'>Delivery of all possibilities with one load at a time</h1>
                <FormData />
            </div>
        </section>
    )
}

export default Hero