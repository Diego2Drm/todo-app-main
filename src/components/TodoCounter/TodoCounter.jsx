import React from "react";
import { ShowTodos } from "../ShowTodos/ShowTodos";

function TodoCounter({ incompleteTodos, onClear, allTodos, active, completed, activeButton }) {

  const classDesktop = "text-Dark-Grayish-Blue-light dark:text-Very-Dark-Grayish-Blue2 font-bold hidden md:flex gap-10"

  return (
    <div className='flex justify-between px-5 py-4 '>
      <p className='text-sm text-Dark-Grayish-Blue-light dark:text-Very-Dark-Grayish-Blue2 font-semibold p-1'>
        {incompleteTodos} items left
      </p>

      <ShowTodos 
      allTodos={allTodos} 
      active={active} 
      completed={completed} 
      className={classDesktop} 
      activeButton={activeButton}/>

      <button className='text-sm text-Dark-Grayish-Blue-light dark:text-Very-Dark-Grayish-Blue2 hover:text-Very-Dark-Desaturated-Blue dark:hover:text-Light-Grayish-Blue-hover' 
      onClick={onClear}>
        Clear Completed
      </button>
    </div>
  );
};

export { TodoCounter };