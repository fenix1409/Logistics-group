import React from 'react'
import S1 from '../../assets/service1.avif'
import S2 from '../../assets/service2.png'
import S3 from '../../assets/service3.png'
import S4 from '../../assets/service4.png'

const ServicesCard = () => {
    const services = [
        { id: 1, title: "International cargo transportation", image: S1 },
        { id: 2, title: "Cargo storage and handling", image: S2 },
        { id: 3, title: "Customs clearance", image: S3 },
        { id: 4, title: "Logistics consulting", image: S4 }
    ]
    return (
        <>
            {services.map(item => (
                <div key={item.id} className="flex items-center gap-[30px] mb-[60px] relative">
                    <img src={item.image} alt={item.title} className="w-[450px] h-[450px] object-cover rounded-[20px]" />
                    <h3 className='text-[25px] leading-[100%] font-medium bottom-[50px] left-[20px] text-white absolute'>{item.title}</h3>
                </div>
            ))}
        </>
    )
}

export default ServicesCard