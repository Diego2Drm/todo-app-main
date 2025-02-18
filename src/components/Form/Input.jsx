import React from "react";

function Input(props) {

  const { handleChange, todoInput } = props

  return (
    <>
      <label id="add" className="flex gap-2 items-center py-2 px-5 rounded-md bg-Very-Light-Gray shadow-black shadow-md
      dark:bg-Very-Dark-Desaturated-Blue 
      dark:shadow-white">

        <div className="w-6 h-6 border-2 rounded-full border-Light-Grayis-Blue dark:border-Very-Dark-Grayish-Blue2"></div>
        
        <input
          onChange={handleChange}
          type="text"
          name="add"
          value={todoInput}
          placeholder="Create a new todo..."
          className="p-1 w-full bg-transparent placeholder:text-Dark-Grayish-Blue placeholder:text-sm outline-none font-josefin font-semibold
          text-purple-800
          placeholder:text-Dark-Grayish-Blue-light 
          dark:text-purple-400
          dark:placeholder:text-Dark-Grayish-Blue-dark 
          " />
      </label>
    </>
  );
};

export { Input };