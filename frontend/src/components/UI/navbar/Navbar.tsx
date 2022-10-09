import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='absolute w-full top-12'>
      <div className='flex items-center justify-between max-w-7xl mx-auto'>
        <div>
            <img src={require('../../../assets/banner/logo.png')} alt="" />
        </div>
        <div>
          <nav className="flex gap-10 items-center text-white leading-6 text-xl">
            <NavLink to="">Главная</NavLink>
            <NavLink to="printers">Принтеры</NavLink>
            <NavLink to="/404">Мероприятия</NavLink>
            <NavLink to="/404">Контакты</NavLink>
          </nav>
        </div>
      </div>
    </div>
  )
}
