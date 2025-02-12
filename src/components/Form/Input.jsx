import React from "react";

function Input(props) {

  const { handleChange, todoInput } = props

  return (
    <>
      <label id="add" className="flex gap-2 items-center py-2 px-5  rounded-md bg-Very-Dark-Desaturated-Blue shadow-sm shadow-white">
        <div className="w-6 h-6 border-2 border-Very-Dark-Grayish-Blue2 rounded-full"></div>

        <input
          onChange={handleChange}
          type="text"
          name="add"
          value={todoInput}
          placeholder="Create a new todo..."
          className="p-1 w-full bg-transparent placeholder:text-Dark-Grayish-Blue placeholder:text-sm outline-none text-Light-Grayish-Blue font-josefin font-medium" />
      </label>
    </>
  );
};

export { Input };