export default function UsageSpheresMob() {
  return (
    <div className='bg-[#1E1F21] py-[30px] laptop:py-[150px]'>
        <div className='laptop:flex laptop:max-w-7xl laptop:mx-auto laptop:mb-[140px] pb-4'>
            <h2 className=' uppercase text-lg text-white font-semibold w-screen pl-[10px] laptop:normal-case laptop:text-[40px] laptop:text-white laptop:leading-[40px] laptop:w-[600px]'>
                Сферы применения
            </h2>
            <div className=' text-md text-[#CECECE] w-md pl-[10px] laptop:text-[18px] laptop:leading-[27px] laptop:w-[800px]'>
                <div className=''>
                    Фотополимерная печать используется в тех отраслях, где подходит по следующим факторам: качество, точность построения, физические свойства и максимальные габариты создаваемого изделия
                </div>
                <div className='grid grid-rows-3 laptop:grid-cols-3 whitespace-nowrap pt-[10px] pl-[10px]'>
                    <ul className='sf font-normal laptop:font-bold'>
                        <li>ювелирное дело</li>
                        <li>стоматология</li>
                        <li>машиностроение</li>
                    </ul>
                    <ul className='sf font-normal laptop:font-bold'>
                        <li>медицина</li>
                        <li>автомобилестроение</li>
                        <li>архитектура</li>
                    </ul>
                    <ul className='sf font-normal laptop:font-bold'>
                        <li>прототипирование</li>
                        <li>текстильная промышленность</li>
                        <li>обувная промышленность</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='grid grid-cols-1 place-items-center laptop:place-items-start gap-5  mx-auto text-white laptop:flex laptop:gap-12 laptop:justify-around laptop:max-w-7xl laptop:mx-auto'>
            <div className='p-3 laptop:p-7 w-[290px] h-[250px] shadow-2xl laptop:w-[420px] laptop:h-[450px] laptop:shadow-2xl '>
                <img className='w-[118px] h-[123px] mx-auto laptop:w-[250px] laptop:h-[250px]' src={require('../assets/printers/firstPrinter.png')} alt="p1" />
                <h1 className='text-[25px] leading-[27px] mt-2 laptop:mt-8'>Ruby (R Lite / R Pro)</h1>
                <div className='flex items-center justify-between text-[18px] leading-[22px] mt-4 laptop:mt-10'>
                    <div className='underline cursor-pointer'>Подробнее</div>
                    <button className='px-5 py-1 border border-[#26AAE1] rounded-full cursor-pointer'>Заказать</button>
                </div>
            </div>
            <div className='p-3 laptop:p-7 w-[290px] h-[250px] shadow-2xl laptop:w-[420px] laptop:h-full laptop:shadow-2xl'>
                <img className='w-[89px] h-[146px] mx-auto laptop:w-[250px] laptop:h-[400px]' src={require('../assets/printers/secondPrinter.png')} alt="p2" />
                <h1 className='text-[22px] leading-[27px] mt-2 laptop:mt-8'>Sapphire (S Lite / S Pro)</h1>
                <div className='flex items-center justify-between text-[18px] leading-[22px] mt-4 laptop:mt-10'>
                    <div className='underline cursor-pointer'>Подробнее</div>
                    <button className='px-5 py-1 border border-[#26AAE1] rounded-full cursor-pointer'>Заказать</button>
                </div>
            </div>
            <div className='p-3 laptop:p-7 w-[290px] h-[250px] shadow-2xl laptop:w-[420px] laptop:h-[450px] laptop:hadow-2xl'>
                <img className='w-[91px] h-[139px] mx-auto laptop:w-[150px] laptop:h-[250px]' src={require('../assets/printers/thirdPrinter.png')} alt="p3" />
                <h1 className='text-[22px] leading-[27px] mt-2 laptop:mt-8'>Heliodorus (H Lite / H Pro)</h1>
                <div className='flex items-center justify-between text-[18px] leading-[22px] mt-4 laptop:mt-10'>
                    <div className='underline cursor-pointer'>Подробнее</div>
                    <button className='px-5 py-1 border border-[#26AAE1] rounded-full cursor-pointer'>Заказать</button>
                </div>
            </div>
            
        </div>
    </div>
  )
}
