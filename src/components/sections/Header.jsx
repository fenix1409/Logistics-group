import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
const Header = () => {
    const lists = [
        {id:1, title: "Home", path: "/home"},
        {id:2, title: "Services", path: "/services"},
        {id:3, title: "Tariffs", path: "/tariffs"},
        {id:4, title: "Contact", path: "/contact"}
    ]
    return (
        <header className='px-[50px] flex items-center justify-between pt-[34px]'>
            <Link to={'/'}>
                <img src={Logo} alt="Logo image" width={220} height={100} />
            </Link>
            <ul className='flex items-center gap-[55px]'>
                {lists.map(item => (
                    <Link to={item.path} key={item.id} className='text-[18px] leading-[100%] font-medium'>{item.title}</Link>
                ))}
            </ul>
        </header>
    )
}

export default Header