import React from 'react'

const Numbers = () => {
    const numbers = [
        { id: 1, amount: "12+", title: "Year Services" },
        { id: 2, amount: "+20K+", title: "Cargo Delivered" },
        { id: 3, amount: "500", title: "Total Cargo" }
    ]
    return (
        <>
            {numbers.map(item => (
                <div className="flex flex-col items-center w-[412px]" key={item.id}>
                    <strong className='inline-block text-[60px] leading-[75px] mb-[5px]'>{item.amount}</strong>
                    <p className='text-[22px] leading-[100%]'>{item.title}</p>
                </div>
            ))}
        </>
    )
}

export default Numbers