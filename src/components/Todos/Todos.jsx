import React from 'react';
import iconCross from '../../assets/images/icon-cross.svg'
import iconCheck from '../../assets/images/icon-check.svg'

function Todos({ todoText, completed, onComplete, onDelete }) {
  return (
    <section className='flex border-b-2  p-2 items-center justify-between px-5
    border-Light-Grayis-Blue
    dark:border-Very-Dark-Grayish-Blue2
    '>

      <div className='flex items-center gap-3 p-1 hover:cursor-pointer' onClick={onComplete}>

        <div className={`${completed ?
          'bg-gradient-to-r from-Check-Background1 to-Check-Background2' :
          'border-Light-Grayis-Blue dark:bg-Very-Dark-Desaturated-Blue border-2 dark:border-Very-Dark-Grayish-Blue2'} 
           w-5 h-5 flex justify-center items-center rounded-full`}
        >

          {
            completed && <img src={iconCheck} alt="icon-check" />
          }

        </div>

        <p className={`${completed ?
          'text-Light-Grayis-Blue                                    dark:text-Very-Dark-Grayish-Blue2 line-through' :
          'text-Very-Dark-Grayish-Blue1 font-semibold dark:text-Light-Grayish-Blue dark:hover:text-Light-Grayish-Blue-hover'
          } text-sm capitalize`}

        >
          {todoText}
        </p>

      </div>

      <img src={iconCross} alt="icon-cross" className='w-3 hover:cursor-pointer' onClick={onDelete} />
    </section>

  );
};

export { Todos };