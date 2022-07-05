import React from "react";
import hero from "../Assets/hero.png";
import prog1 from "../Assets/prog1.png";
import prog2 from "../Assets/prog2.png";
import prog3 from "../Assets/prog3.png";
import prog4 from "../Assets/prog4.png";

const MainPage = () => {
  return (
    <div className='flex flex-col  items-center min-h-screen p-7'>
      <div className='flex flex-col'>
        <div className='text-center font-extrabold text-4xl'>
          Welcome to frontend Quiz
        </div>
        <img src={hero} alt='hero-img' />
      </div>
      <div className='text-center font-extrabold text-2xl'>CATEGORIES</div>
      <div className='flex-col'>
        <div className='flex gap-2.5'>
          <div className='relative hover:shadow-lg shadow-gray-400/50'>
            <img className='max-w-xs h-80 ' src={prog1} alt='html-img' />
            <div className='text-center font-semibold text-md'>HTML</div>
          </div>
          <div className='flex flex-col  hover:shadow-lg shadow-gray-400/50'>
            <img className='max-w-xs h-80' src={prog2} alt='css-img' />
            <div className='text-center align-text-bottom items-end font-semibold text-md'>
              CSS
            </div>
          </div>
        </div>
        <div className='flex gap-2.5'>
          <div className='flex flex-col  hover:shadow-lg shadow-gray-400/50'>
            <img className='max-w-xs h-80' src={prog3} alt='js-img' />
            <div className='text-center align-text-bottom items-end font-semibold text-md'>
              Javascript
            </div>
          </div>
          <div className='flex flex-col  hover:shadow-lg shadow-gray-400/50'>
            <img className='max-w-xs h-80' src={prog4} alt='react-img' />
            <div className='text-center align-text-bottom items-end font-semibold text-md'>
              React
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { MainPage };
