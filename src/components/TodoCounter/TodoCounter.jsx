import React from "react";

function TodoCounter({ incompleteTodos }) {
  return (
    <div className='flex justify-between px-5 py-4 '>
      <p className='text-sm text-Very-Dark-Grayish-Blue2 font-semibold p-1'>
        {incompleteTodos} items left
      </p>
      <button className='text-sm text-Very-Dark-Grayish-Blue2'>
        Clear Completed
      </button>
    </div>
  );
};

export { TodoCounter };