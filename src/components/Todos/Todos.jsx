import React from 'react';
import iconCross from '../../assets/images/icon-cross.svg'
import iconCheck from '../../assets/images/icon-check.svg'

function Todos({ todoText, completed, onComplete, onDelete }) {
  return (
    <section className='flex border-b-2 border-Very-Dark-Grayish-Blue2 p-2 items-center justify-between px-5'>

      <div className='flex items-center gap-3 p-1' onClick={onComplete}>

        <div className={`${completed ?
          'bg-gradient-to-r from-Check-Background1 to-Check-Background2' :
          'bg-Very-Dark-Desaturated-Blue border-2 border-Very-Dark-Grayish-Blue2'} 
                 w-5 h-5 flex justify-center items-center rounded-full`}
        >

          {
            completed && <img src={iconCheck} alt="icon-check" />
          }

        </div>

        <p className={`${completed ?
          'text-Very-Dark-Grayish-Blue2 line-through' :
          'text-Light-Grayish-Blue'
          } text-sm`}

        >
          {todoText}
        </p>

      </div>

      <img src={iconCross} alt="icon-cross" className='w-3' onClick={onDelete} />
    </section>

  );
};

export { Todos };