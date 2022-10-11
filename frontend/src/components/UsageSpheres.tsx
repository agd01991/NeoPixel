import React from 'react'

export default function UsageSpheres() {
  return (
    <div className='bg-[#1E1F21] py-[150px]'>
        <div className='flex max-w-7xl mx-auto mb-[140px]'>
            <h2 className='text-[40px] text-white leading-[40px] font-semibold w-[600px]'>
                Сферы применения
            </h2>
            <div className='text-[18px] leading-[27px] text-[#CECECE] w-[800px]'>
                <div className=''>Фотополимерная печать используется в тех отраслях, где подходит по следующим факторам: качество, точность построения, физические свойства и максимальные габариты создаваемого изделия</div>
                <div className='grid grid-cols-3 whitespace-nowrap'>
                    <ul>
                        <li>ювелирное дело</li>
                        <li>стоматология</li>
                        <li>машиностроение</li>
                    </ul>
                    <ul>
                        <li>медицина</li>
                        <li>автомобилестроение</li>
                        <li>архитектура</li>
                    </ul>
                    <ul>
                        <li>прототипирование</li>
                        <li>текстильная промышленность</li>
                        <li>обувная промышленность</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='flex gap-12 justify-around max-w-7xl mx-auto text-white bg-red-600'>
            <div className='p-7 w-[420px]'>
                <img className='w-[250px] h-[250px] mx-auto' src={require('../assets/printers/firstPrinter.png')} alt="" />
                <h1 className='text-[25px] leading-[27px] mt-8'>Ruby (R Lite / R Pro)</h1>
                <div className='flex items-center justify-between text-[18px] leading-[22px] mt-10'>
                    <div className='underline cursor-pointer'>Подробнее</div>
                    <button className='px-5 py-1 border border-[#26AAE1] rounded-full cursor-pointer'>Заказать</button>
                </div>
            </div>
            <div className='p-7 w-[420px]'>
                <img className='w-[250px] h-[400px] mx-auto' src={require('../assets/printers/secondPrinter.png')} alt="" />
                <h1 className='text-[25px] leading-[27px] mt-8'>Sapphire (S Lite / S Pro)</h1>
                <div className='flex items-center justify-between text-[18px] leading-[22px] mt-10'>
                    <div className='underline cursor-pointer'>Подробнее</div>
                    <button className='px-5 py-1 border border-[#26AAE1] rounded-full cursor-pointer'>Заказать</button>
                </div>
            </div>
            <div className='p-7 w-[420px]'>
                <img className='w-[180px] h-[280px] mx-auto' src={require('../assets/printers/thirdPrinter.png')} alt="" />
                <h1 className='text-[25px] leading-[27px] mt-8'>Heliodorus (H Lite / H Pro)</h1>
                <div className='flex items-center justify-between text-[18px] leading-[22px] mt-10'>
                    <div className='underline cursor-pointer'>Подробнее</div>
                    <button className='px-5 py-1 border border-[#26AAE1] rounded-full cursor-pointer'>Заказать</button>
                </div>
            </div>
            
        </div>
    </div>
  )
}
