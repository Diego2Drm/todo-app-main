import React from 'react';
import iconCross from '../../assets/images/icon-cross.svg'
import iconCheck from '../../assets/images/icon-check.svg'
import { Reorder, useDragControls } from 'motion/react';

function Todos({ todo, todoText, completed, onComplete, onDelete,container }) {
  const controls = useDragControls()

  return (
    <Reorder.Item value={todo} dragConstraints={container} dragElastic={0.1} dragControls={controls} id={todo}
      className='bg-white flex border-b-2  p-6 items-center justify-between px-5
    border-Light-Grayis-Blue
    dark:border-Very-Dark-Grayish-Blue2 dark:bg-Very-Dark-Desaturated-Blue 
    '>

      <div className='flex items-center gap-3 p-1 '>

        <div className={`${completed ?
          'bg-gradient-to-r from-Check-Background1 to-Check-Background2' :
          'border-Light-Grayis-Blue dark:bg-Very-Dark-Desaturated-Blue border-2 dark:border-Very-Dark-Grayish-Blue2'} 
           w-5 h-5 flex justify-center items-center rounded-full hover:cursor-pointer`}
           onClick={onComplete}
        >

          {
            completed && <img src={iconCheck} alt="icon-check" />
          }

        </div>

        <p className={`${completed ?
          'text-Light-Grayis-Blue dark:text-Very-Dark-Grayish-Blue2 line-through' :
          'text-Very-Dark-Grayish-Blue1 font-semibold dark:text-Light-Grayish-Blue dark:hover:text-Light-Grayish-Blue-hover'
          } text-sm capitalize cursor-move`}

        >
          {todoText}
        </p>

      </div>

      <img src={iconCross} alt="icon-cross" className='w-3 hover:cursor-pointer' onClick={onDelete} />
    </Reorder.Item>

  );
};

export { Todos };