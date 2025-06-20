import React from 'react'
import Questions from '../ui/Questions'

const FAQs = () => {
    return (
        <section className='px-[80px] py-[90px]'>
            <div className="flex items-center justify-between mb-[60px]">
                <div className="flex flex-col gap-[30px] w-[546px]">
                    <h2 className='text-[22px] leading-[100%] font-semibold text-[#0563AB]'>FAQs</h2>
                    <h3 className='text-[65px] leading-[80px] font-semibold'>Frequently Asked Questions</h3>
                </div>
                <p className='text-[18px] leading-[28px] w-[407px]'>Explore our detailed FAQ section that will answer all your questions and help you plan a pleasant and memorable journey.</p>
            </div>
            <div className="flex items-center flex-col gap-[24px]">
                <Questions />
            </div>
        </section>
    )
}

export default FAQs