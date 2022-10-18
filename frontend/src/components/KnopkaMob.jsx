import React from 'react';

const KnopkaMob = () => {
    return (
        <div className='visible laptop:invisible  flex justify-center pt-[30px] pb-[30px] mx-auto bg-[#1E1F21] laptop:absolute relative'>
        <button className='px-8 py-2 text-[25px] leading-[30px] text-white bg-[#26AAE1] rounded-full text-center'>Заказать</button>
        </div>
    );
};

export default KnopkaMob;