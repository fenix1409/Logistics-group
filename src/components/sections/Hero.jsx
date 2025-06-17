import React from 'react'
import Image from '../../assets/hero-img.png'
import { Box, Plane, Ship, Shop, Van } from '../../assets/Icons'
import FormData from '../ui/FormData'

const Hero = () => {
    const icons = [
        { id: 1, icon: <Box /> },
        { id: 2, icon: <Van /> },
        { id: 3, icon: <Shop /> },
        { id: 4, icon: <Ship /> },
        { id: 5, icon: <Plane /> }
    ]
    return (
        <section className='px-[80px] flex items-center justify-between mt-[88px]'>
            <img src={Image} alt="Hero image" width={655} height={725} className='rounded-[30px]' />
            <div className="w-[516px]">
                <h1 className='text-[62px] leading-[100%] font-medium mb-[58px]'>Delivery of all possibilities with one load at a time</h1>
                <div className="flex items-center gap-[54px] mb-[60px]">
                    {icons.map(item => (
                        <div key={item.id}>{item.icon}</div>
                    ))}
                </div>
                <FormData />
            </div>
        </section>
    )
}

export default Hero