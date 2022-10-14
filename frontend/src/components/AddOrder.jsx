import React from 'react';

const AddOrder = () => {
    return (
        <div className='bg-[#171616] py-[100px] '>
            <div className='text-white flex max-w-7xl mx-auto mb-[140px] p-[10px] justify-center'>
                <div className='text-5xl font-HelveticaNeueCyr font-semibold'>ПОЛУЧИ КОНСУЛЬТАЦИЮ ОНЛАЙН</div>
            </div>
<div className='flex justify-center'>
  <form className=''>
    <div className='flex font-inter '>
    <div class="form-group mb-6">
      <input type="email" class="form-control block
      h-[75px]
      w-[275px]
      text-xl
        font-normal
        text-gray-700
        bg-[#1E1F21] bg-clip-padding
        border border-solid border-gray-300
        rounded-full
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-[#1E1F21] focus:border-blue-600 focus:outline-none" id="exampleInput8"
        placeholder="Электронная почта"/>
    </div>
    <div class="form-group mb-6">
      <input type="text" class="form-control block
       h-[75px]
       w-[275px]
        text-xl
        font-normal
        text-gray-700
        bg-[#1E1F21] bg-clip-padding
        border border-solid border-gray-300
        rounded-full
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-[#1E1F21] focus:border-blue-600 focus:outline-none" id="exampleInput7"
        placeholder="Имя"/>
    </div>
    <div class="form-group mb-6">
    <input type="tel" class="form-control block
      h-[75px]
      w-[275px]
      text-xl
        font-normal
        text-gray-700
        bg-[#1E1F21] bg-clip-padding
        border border-solid border-gray-300
        rounded-full
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-[#1E1F21] focus:border-blue-600 focus:outline-none" id="exampleInput8"
        placeholder="Телефон"/>
    </div>    <button type="submit" class="
 
      h-[75px]
      w-[275px]
      bg-blue-600
      text-white
      font-medium
      text-lg
      leading-tight
      uppercase
      rounded-full
      shadow-md
      hover:bg-[#26AAE1] hover:shadow-lg
      focus:bg-[#26AAE1] focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-[#26AAE1]active:shadow-lg
      transition
      duration-150
      ease-in-out">Оставить заявку</button>
      </div>
    <div class="form-group form-check text-center mb-6">
      <input type="checkbox"
        class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
        id="exampleCheck87" checked/>
      <label class="form-check-label inline-block text-white text-lg" for="exampleCheck87">Я соглашаюсь на обработку персональных данных</label>
    </div>

  </form>
  </div>


    </div>
    );
};

export default AddOrder;