import React from 'react'
import DescriptionMob from './banner/DescriptionMob'
import NavbarMob from './UI/navbar/NavbarMob'
import Video from './banner/Video'
import KnopkaMob from './KnopkaMob'


export default function Banner() {
  return (
    <div className='relative'>

        <NavbarMob/>
        <DescriptionMob />
        <Video />
        <KnopkaMob/>


    </div>
  )
}
