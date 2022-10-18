import React from 'react'

export default function Description() {
  return (
    <div className='absolute w-full bottom-[170px] '>
        <div className='max-w-7xl mx-auto'>
            <h1 className='uppercase text-white text-6xl font-semibold'>Точность. <span className='text-[#26AAE1]'>Превосходство.</span> Технологичность</h1>
            <div className='flex items-center justify-between mt-5'>
                <h3 className='text-[#CECECE] text-2xl'>Первый отечественный фотополимерный 3D-принтер повышенной точности</h3>
                <button className='px-8 py-2 text-[25px] leading-[30px] text-white bg-[#26AAE1] rounded-full text-center'>Заказать</button>
            </div>
        </div>
    </div>
  )
}
