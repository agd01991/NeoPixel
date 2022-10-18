import React from 'react';
import foot from '../components/UI/img/footer.png'
import tel from '../components/UI/img/Vectortel.svg'
import email from '../components/UI/img/Vectoremail.svg'
import inst from '../components/UI/img/Vectorinst.svg'
const Footer = () => {
    return (
        <div>  
                <div className='absolute w-full'>
        <div className=' max-w-3xl mx-auto text-center pt-[100px]'>
            <h1 className='uppercase text-white text-6xl font-semibold '><span className=' text-[#26AAE1]'>несравнимый аналог.</span> доступная цена</h1>
            </div>
            </div>
            
            <div className='absolute flex gap-3 justify-around  mx-auto text-white pt-[300px] w-full'>      
             <div className='text-5xl font-HelveticaNeueCyr font-semibold text-white'><img src={tel} className='float-left px-5 py-3'/>8-985-192-48-93</div>
             <div className='text-5xl font-HelveticaNeueCyr font-semibold text-white'><img src={email} className='float-left px-5 py-4'/>max.bogush@mail.ru</div>
             <div className='text-5xl font-HelveticaNeueCyr font-semibold text-white'><img src={inst} className='float-left px-5 py-3'/>@hive_3d</div>
             </div>   
             <img src={foot} alt="" />

            
        </div>
    );
};

export default Footer;