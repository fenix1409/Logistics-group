import React from 'react'
import { Global, Key, Suitcase } from '../../assets/Icons'

const Cards = () => {
    const cards = [
        { id: 1, title: "Small and Medium Businesses", icon: <Global />, paragraph: "Optimal logistics solutions for startups and companies developing their directions." },
        { id: 1, title: "Large Corporate Clients", icon: <Suitcase />, paragraph: "Full logistics cycle, including individual routes, cargo consolidation, and international transportation." },
        { id: 1, title: "Private Clients", icon: <Key />, paragraph: "Reliable delivery of personal and commercial goods with a quality guarantee." }
    ]
    return (
        <>
            {cards.map(item => (
                <div className='px-[28px] py-[31px] bg-[white] rounded-[10px] shadow-[#0000001A] w-[407px]' key={item.id}>
                    <div className="flex items-center justify-between mb-[20px]">
                        <div>{item.icon}</div>
                        <h2 className='text-[24px] leading-[28px] font-semibold'>{item.title}</h2>
                    </div>
                    <p className='text-[18px] leading-[26px] text-[#9C9C9C]'>{item.paragraph}</p>
                </div>
            ))}
        </>
    )
}

export default Cards