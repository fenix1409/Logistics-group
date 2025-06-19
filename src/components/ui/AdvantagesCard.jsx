import React from 'react'
import { Arrow } from '../../assets/Icons'

const AdvantagesCard = () => {
    const advantages = [
        { id: 1, number: 1, title: "Client-oriented approach", text: "We are always in touch, resolve issues promptly, and strive to make the cooperation process as convenient and comfortable as possible for the client." },
        { id: 2, number: 2, title: "Wide range of services", text: "From transportation and warehousing to cargo consolidation and customs clearance, we offer a full range of services that cover all stages of the logistics process." },
        { id: 3, number: 3, title: "Experience with China", text: "We have a reliable partner in China, which allows us to efficiently organize logistics, minimize costs, and ensure uninterrupted operations even in a competitive environment." },
        { id: 4, number: 4, title: "Reliability and safety", text: "Our priority is the safety of your cargo. We guarantee compliance with all safety standards and closely monitor the quality of transportation." },
        { id: 5, number: 5, title: "Flexible delivery times", text: "We always find optimal routes and delivery methods to reduce travel time without compromising service quality." },
        { id: 6, number: 6, title: "Transparency and honesty", text: "All information about terms, costs, and conditions of cooperation is provided openly and honestly. We build long-term relationships based on trust and transparency." }
    ]
    return (
        <>
            {advantages.map(item => (
                <div key={item.id} className='flex flex-col gap-[50px] w-[407px] h-[407px] py-[47px] px-[32px] bg-[#eff8ff] hover:bg-[#0563AB] rounded-[10px] hover:text-white duration-400'>
                    <div className="flex items-center justify-between">
                        <strong className='inline-block text-[60px] leading-[100px]'>0{item.number}</strong>
                        <div className=''><Arrow /></div>
                    </div>
                    <div className="space-y-[10px]">
                        <h3 className='text-[28px] leading-[100%] font-medium'>{item.title}</h3>
                        <p className='text-[20px] font-light'>{item.text}</p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default AdvantagesCard