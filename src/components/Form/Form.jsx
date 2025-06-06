import React, { useRef } from "react";
import { useState } from "react";
import { Todos } from "../Todos/Todos";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { ShowTodos } from "../ShowTodos/ShowTodos";
import { Input } from "./Input";
import { useLocalStorage } from "../../Hooks/useLocalStorage";
import { Reorder } from 'motion/react'

const todosInfo = [
  // { text: "Work 1", completed: true, },
  // { text: "Work 2", completed: false, },
  // { text: "Work 3", completed: true, },
  // { text: "Work 4", completed: false, },
  // { text: "Work 5", completed: true, },
  // { text: "Aprender Testing en Web.dev", completed: false, },
]

function Form() {

  const [todoInput, setTodoInput] = useState('');
  const [todos, saveTodos] = useLocalStorage('TODOS', []);
  const [filterTodos, setFilterTodos] = useLocalStorage('TODOS', [])
  const [activeButtons, setActiveButtons] = useState("all")

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false,
    });
    saveTodos(newTodos)
    setFilterTodos(newTodos)
  }
  const handleChange = (e) => {
    setTodoInput(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setTodoInput('')
    addTodo(todoInput);
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
    saveTodos(newTodos);
    setFilterTodos(newTodos)
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      todo => todo.text == text
    );
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos);
    setFilterTodos(newTodos)
  };

  const onClearComplete = () => {
    const newTodos = todos.filter(todo => !todo.completed);
    saveTodos(newTodos);
    setFilterTodos(newTodos)
  };

  const classMobile = "bg-Very-Light-Gray text-Dark-Grayish-Blue-light mt-10 rounded-md flex justify-center gap-10 p-2 dark:bg-Very-Dark-Desaturated-Blue dark:text-Very-Dark-Grayish-Blue2 font-bold md:hidden"

  const container = useRef(null);

  return (
    <section className="mt-8">
      <form onSubmit={handleSubmit} className="mb-7">
        <Input
          handleChange={handleChange}
          todoInput={todoInput}
        />
      </form>

      <div className="rounded-md bg-Very-Light-Gray dark:bg-Very-Dark-Desaturated-Blue">

        {
          filterTodos.length == 0 &&
          <p className="text-Very-Dark-Grayish-Blue1 dark:text-white text-center p-2 uppercase italic pt-8 text-xl">
            Empty Todos
          </p>
        }

        <Reorder.Group axis="y" values={filterTodos} onReorder={setFilterTodos} ref={container}>
          {
            filterTodos.map((todo, i) => (
              <Todos key={i}
                todo={todo}
                todoText={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodos(todo.text)}
                onDelete={() => deleteTodo(todo.text)} container={container} />

            ))
          }
        </Reorder.Group>

        <TodoCounter
          incompleteTodos={incompleteTodos}
          onClear={onClearComplete}
          allTodos={allTodos}
          active={activeTodos}
          completed={completedTodo}
          activeButton={activeButtons} />

      </div>

      <ShowTodos
        allTodos={allTodos}
        active={activeTodos}
        completed={completedTodo}
        activeButton={activeButtons}
        className={classMobile} />
    </section >
  );
};

export { Form };
