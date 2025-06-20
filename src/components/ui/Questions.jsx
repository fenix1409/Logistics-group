import React, { useState } from 'react'

const Questions = () => {
    const data = [
        {
            id: 1,
            title: "What services does your company provide?",
            answer: "We provide a full range of logistics services, including international and domestic transportation, warehousing, customs clearance, and cargo consolidation."
        },
        {
            id: 2,
            title: "How dod you ensure the safety of the products?",
            answer: "We work only with trusted carriers, use modern tracking systems, and follow all safety measures at every stage of transportation."
        },
        {
            id: 3,
            title: "Which regions do you work with?",
            answer: "Our company actively works with China, CIS countries, and Europe, providing efficient delivery solutions in the shortest possible time."
        },
        {
            id: 4,
            title: "What are the delivery times for products?",
            answer: "Delivery times depend on the type of cargo, route, and chosen mode of transport. We always strive to offer optimal delivery times and keep the client informed at every stage."
        },
        {
            id: 5,
            title: "What type of products do you transport?",
            answer: "We work with a wide range of goods, including standard, oversized, hazardous, and perishable items."
        },
        {
            id: 6,
            title: "Do you have a experience working with large companies?",
            answer: "Yes, we have extensive experience working with large clients. Our reputation is built on successful projects and long-term partnerships."
        },
        {
            id: 7,
            title: "Yetkazib berish narxi qancha turadi?",
            answer: ""
        },
        {
            id: 8,
            title: "Can cargo be tracked in real-time?",
            answer: "Yes, we provide cargo tracking services through modern digital platforms so that clients can be aware of their shipment's location."
        },
        {
            id: 9,
            title: "What docummentation is required for transportation arrangements?",
            answer: "The list of documents depends on the type of cargo and route. We provide detailed consultations and assist in preparing all the necessary paperwork."
        },
        {
            id: 10,
            title: "What benefits will I get from working with your company?",
            answer: "We guarantee reliability, a professional approach, tailored solutions to your needs, and transparency at all stages of cooperation."
        }
    ]

    const [openId, setOpenId] = useState(null)

    function toggleFaq(id) {
        if (openId === id) {
            setOpenId(null)
        }
        else {
            setOpenId(id)
        }
    }
    return (
        <>
            {data.map(item => (
                <div key={item.id} className="w-[792px]">
                    <div className="py-[20px] px-[24px] bg-[#F5F5F5] rounded-[16px] cursor-pointer transition-all duration-200 ease-in-out">
                        <div className="flex items-center justify-between" onClick={() => toggleFaq(item.id)}>
                            <p className="text-[15px] leading-[24px] font-semibold">{item.title}</p>
                            <button className={`cursor-pointer transition-transform duration-300 ${openId === item.id ? "rotate-[136deg]" : ""}`}>
                                +
                            </button>
                        </div>
                        <div className={`bg-[#F5F5F5] overflow-hidden transition-all duration-300 ease-in-out rounded-b-[16px] ${openId === item.id ? "max-h-[500px] py-[20px] px-[24px]" : "max-h-0 py-0 px-[24px]"}`}>
                            <p className="text-[14px] leading-[22px] text-[#666]">
                                {item.answer}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Questions