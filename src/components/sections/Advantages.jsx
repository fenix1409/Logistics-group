import React from 'react'
import AdvantagesCard from '../ui/AdvantagesCard'

const Advantages = () => {
    return (
        <section className='px-[80px] my-[90px]'>
            <div className="flex items-center justify-between mb-[60px]">
                <div className="flex flex-col space-y-[30px]">
                    <h2 className='text-[22px] leading-[100%] font-semibold text-[#0563AB]'>Adventages</h2>
                    <h3 className='text-[65px] leading-[80px] font-semibold'>Our advantages</h3>
                </div>
                <p className='text-[18px] leading-[28px] w-[407px]'>Working with us guarantees that your cargo will arrive at the right place at the right time, and you will receive high-quality service and confidence in the outcome.</p>
            </div>
            <div className="flex items-center gap-[30px] flex-wrap">
                <AdvantagesCard />
            </div>
        </section>
    )
}

export default Advantages