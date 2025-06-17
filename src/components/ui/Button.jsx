import React from 'react'

const Button = ({ extraClass, title, type }) => {
    return (
        <button type={type} className={`${extraClass} bg-[#0563AB] w-[516px] py-[14px] rounded-[18px] text-white`}>{title}</button>
    )
}

export default Button