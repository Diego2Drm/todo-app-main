import React from "react";

function ShowTodos({ allTodos, active, completed, activeButton, className }) {

  const buttons = [
    { key: "all", name: "All", onclick: allTodos, },
    { key: "active", name: "Active", onclick: active, },
    { key: "completed", name: "Completed", onclick: completed, },
  ]
  
  return (
    <section className={className}>
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