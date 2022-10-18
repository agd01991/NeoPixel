import React from 'react'
import Description from './banner/Description'
import Navbar from './UI/navbar/Navbar'
import Video from './banner/Video'

export default function Banner() {
  return (
    <div className='relative'>

        <Navbar/>
        <Description />
        <Video />
    </div>
  )
}
