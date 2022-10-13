import React from 'react';

const QA = () => {
    return (
        <div className='bg-[#1E1F21] py-[200px]'>
        <div className='flex max-w-7xl mx-auto mb-[140px]'>
            <div className='text-[40px] text-white leading-[40px] font-semibold w-[600px]'>ответы на вопросы</div>
            <div className='text-[18px] leading-[27px] text-[#CECECE] w-[800px]'>
                <div className=' whitespace-nowrap'>
                    <ul className='text-[25px]'>
                        <li className='pb-[30px] '>Модель не прилипает к платформе</li>
                        <li className='pb-[30px]'>Ошибка печати</li>
                        <li className='pb-[30px]'>Экран-маска не работает</li>
                        <li className='pb-[30px]'>Модель расслаивается или образуются дыры</li>                        
                    </ul>
                </div>
            </div>
        </div>
        <div className='flex justify-center text-grey text-[25px]'>
        Большая часть проблем связана с фотополимером. Смените смолу на более новую или, рекомендованную производителем!
         </div>

</div>
    );
};

export default QA;