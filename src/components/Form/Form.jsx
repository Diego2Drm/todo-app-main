import React from "react";
import { useState } from "react";
import { Todos } from "../Todos/Todos";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { ShowTodos } from "../ShowTodos/ShowTodos";

const todosInfo = [
  { text: "Work 1", completed: true, },
  { text: "Work 2", completed: false, },
  { text: "Work 3", completed: true, },
  { text: "Work 4", completed: false, },
  { text: "Work 5", completed: true, },
]

function Form() {

  const [todoInput, setTodoInput] = useState('');
  const [submittedText, setSubmittedText] = useState('');
  const [todos, setTodos] = useState(todosInfo);
  const [filterTodos, setFilterTodos] = useState(todosInfo)
  const [activeButtons, setActiveButtons] = useState("all")

  const handleChange = (e) => {
    setTodoInput(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmittedText(todoInput)
    setTodoInput('')
  }
  const incompleteTodos = todos.filter(todo => !todo.completed).length;

  const allTodos = () => {
    setFilterTodos(todos)
    setActiveButtons("all");

  }
  const activeTodos = () => {
    const activeTodos = todos.filter(todo => !todo.completed)
    setFilterTodos(activeTodos)
    setActiveButtons("active")
  }
  const completedTodo = () => {
    setFilterTodos(todos.filter(todo => todo.completed))
    setActiveButtons("completed")
  };

  const completeTodos = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      todo => todo.text == text
    );

    if (newTodos[todoIndex].completed == false) {
      newTodos[todoIndex].completed = true;
    } else {
      newTodos[todoIndex].completed = false;
    }
    setTodos(newTodos);
    setFilterTodos(newTodos)
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      todo => todo.text == text
    );
    newTodos.splice(todoIndex, 1)
    setTodos(newTodos);
    setFilterTodos(newTodos)
  };

  const onClearComplete = () => {
    const newTodos = todos.filter(todo => !todo.completed);
    setTodos(newTodos);
    setFilterTodos(newTodos)
  };


  return (
    <section className="mt-8">
      <form onSubmit={handleSubmit} className="mb-7">
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
      </form>

      <p>{submittedText}</p>

      <div className="bg-Very-Dark-Desaturated-Blue rounded-md">

        {
          filterTodos.map((todo, i) => (
            <Todos key={i} todoText={todo.text} completed={todo.completed} onComplete={() => completeTodos(todo.text)}
              onDelete={() => deleteTodo(todo.text)} />

          ))
        }

        <TodoCounter incompleteTodos={incompleteTodos} onClear={onClearComplete} />

      </div>

      <ShowTodos allTodos={allTodos} active={activeTodos} completed={completedTodo} activeButton={activeButtons} />

    </section >
  );
};

export { Form };
