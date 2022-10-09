import React from 'react'

export default function Video() {
  return (
    <div className='w-full'>
        <video className='object-cover w-full max-h-[900px]' src={require('../../assets/banner/backgroundVideo.mp4')} autoPlay muted loop></video>
    </div>
  )
}
