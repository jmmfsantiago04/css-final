// components/PromoBannerCombined.tsx

import React from 'react';
import Image from 'next/image';
import BlueColumn from '../public/BlueColumn.png'; // Path to your blue image
import RedColumn from '../public/RedColumn.png';  // Path to your red image

const Section2 = () => {
  return (
    <div className="flex mt-[80px] md:mt-5 sm:mt-5 flex-col items-center justify-center min-h-screen bg-white text-center p-4">
      {/* First Text (Red) */}
      <h1 className="text-custom-red text-[20px] xl:text-[30px] sm:text-[25px] md:text-[25px] lg:text-[30px] font-bold mb-[40px]">
        자동차 연식이 높아 걱정하시나요?
      </h1>

      {/* Second Text (Black) */}
      <p className="text-black font-bold text-[15px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[20px] mb-[20px] sm:mb-[40px] md:mb-[40px] lg:mb-[80px] xl:mb-[100px]">
        팔지는 못 하고 폐차 하기 아까우시면 수출!
      </p>

      {/* Promo Text */}
      <p className="text-black text-[20px] sm:text-[25px] md:text-[25px] lg:text-[30px] xl:text-[30px] font-bold mb-[70px]">
        폐차 대비{' '}
        <span className="text-custom-orange">50~300만원</span>{' '}
        더 높은 가격에 내차 팔기!
      </p>

      {/* Flex Container for the two columns */}
      <div className="flex gap-[30px] md:gap-[100px] flex-col md:flex-row justify-center items-center md:items-end space-y-8 md:space-y-0 md:space-x-8 mb-[40px] sm:mb-[50px] md:mb-[60px] lg:mb-[100px] xl:mb-[150px]">
        {/* Blue Column */}
        <div className="flex flex-col items-center ">
          <Image src={BlueColumn} alt="Blue Column" width={203} height={396} className="md:w-[203px] md:h-[496px]" />
        </div>

        {/* Red Column */}
        <div className="flex flex-col items-center ">
          <Image src={RedColumn} alt="Red Column" width={203} height={496} className="md:w-[203px] md:h-[496px] mb-[25px] sm" />
        </div>
      </div>

      {/* Button */}
      <button className="bg-custom-red text-white py-2 md:py-3 px-6 md:px-8 rounded-md  text-[18px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[20px] font-bold hover:bg-red-600   md:mb-[25px] sm:mb-[25px] lg:mb-[85px]">
        지금 바로 상담 받기
      </button>
    </div>
  );
};

export default Section2;
