import Button from "./Button";
import React from "react";

function FormData() {
    const handleSubmit = (e) => {
        e.preventDefault()
        const url = "https://script.google.com/macros/s/AKfycbzQam_qFh1vEmefDxbfyrnDpNkqJlxu7qX-scDf9PAxaNVXkDlzbifoHZfgOmoYWH1JYg/exec";
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: (`From=${e.target.from.value}&Destination=${e.target.destination.value}&Type=${e.target.type.value}&Kg=${e.target.kg.value}`)

        }).then(res => res.text()).then(data => {
            (data)
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <div className="w-[516px]">
            <strong className="text-[25px] leading-[100%] font-medium mb-[25px] inline-block">Calculate your shipment</strong>
            <form onSubmit={handleSubmit} className="flex items-center flex-wrap gap-[15px]">
                <input className="w-[248px] py-[15px] pl-[16px] bg-white rounded-[18px] border-[#9C9C9C] border-[1px] outline-none focus:border-[#0563AB]" required name='from' placeholder='From' type="text" />
                <input className="w-[248px] py-[15px] pl-[16px] bg-white rounded-[18px] border-[#9C9C9C] border-[1px] outline-none focus:border-[#0563AB]" required name='destination' placeholder='Destination ' type="text" />
                <input className="w-full py-[15px] pl-[16px] bg-white rounded-[18px] border-[#9C9C9C] border-[1px] outline-none focus:border-[#0563AB]" placeholder='Cargo description (weight, volume)' type="text" />
                <input className="w-[248px] py-[15px] pl-[16px] bg-white rounded-[18px] border-[#9C9C9C] border-[1px] outline-none focus:border-[#0563AB]" required name='type' placeholder='Type' type="text" />
                <input className="w-[248px] py-[15px] pl-[16px] bg-white rounded-[18px] border-[#9C9C9C] border-[1px] outline-none focus:border-[#0563AB]" required name='kg' placeholder='kg' type="number" />
                <Button title={"Calculate"} type={"submit"} />
            </form>
        </div>
    )
}

export default FormData