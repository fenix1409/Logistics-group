import React from 'react'
import ServicesCard from '../ui/ServicesCard'

const Services = () => {
    return (
        <section className='px-[80px] py-[90px]'>
            <div className="flex items-center justify-between mb-[60px]">
                <div className="flex flex-col gap-[30px] w-[780px]">
                    <h2 className='text-[22px] leading-[100%] font-semibold text-[#0563AB]'>Services</h2>
                    <h3 className='text-[65px] leading-[80px] font-semibold'>Discover the full range of services we offer for delivery</h3>
                </div>
                <p className='text-[18px] leading-[28px] w-[407px]'>We make logistic shipping much easier and straighforward. Combining good service and technology make everything efficient</p>
            </div>
            <div className='flex items-center gap-[30px]'>
                <ServicesCard />
            </div>
        </section>
    )
}

export default Services