import React from "react";

function ShowTodos({ allTodos, active, completed, activeButton }) {

  const buttons = [
    { key: "all", name: "All", onclick: allTodos, },
    { key: "active", name: "Active", onclick: active, },
    { key: "completed", name: "Completed", onclick: completed, },
  ]

  return (
    <section className="bg-Very-Light-Gray text-Dark-Grayish-Blue-light mt-10 rounded-md flex justify-center gap-10 p-2 dark:bg-Very-Dark-Desaturated-Blue dark:text-Very-Dark-Grayish-Blue2 font-semibold">
      {
        buttons.map(button => (
          <button key={button.key} onClick={button.onclick}
            className={activeButton === button.key ? 'text-Bright-Blue' : ''}>
            {button.name}
          </button>
        ))
      }
    </section>
  );
};

export { ShowTodos };