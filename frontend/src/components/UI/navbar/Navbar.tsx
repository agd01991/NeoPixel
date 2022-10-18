import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from './logo2.svg'


export default function Navbar() {
  return (
    <div className='absolute w-full top-12'>
      <div className='flex items-center justify-between max-w-7xl mx-auto'>
        <div>
            <img src={logo} alt="" />
        </div>
        <div>
          <nav className="flex flex-row gap-10 items-center text-white  leading-6 text-xl ">
            <NavLink to="" className="text-blue-500">Главная</NavLink>
            <NavLink to="printers" className="hover:text-blue-600">Принтеры</NavLink>
            <NavLink to="/404" className="hover:text-blue-600">Мероприятия</NavLink>
            <NavLink to="/404" className="hover:text-blue-600">Контакты</NavLink>
          </nav>
        </div>
      </div>
    </div>
  )
}
