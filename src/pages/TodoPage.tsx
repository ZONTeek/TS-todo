import React, { useState, useEffect } from "react";
import { ToDoForm } from "../ToDoForm";
import { TodoList } from "../TodoList";
import { ITodo } from "../interfaces";

declare var confirm: (question: string) => boolean;

export const TodoPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos") || "[]") as ITodo[];
    setTodos(saved);
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title: string) => {
    const newTodo: ITodo = {
      id: Date.now(),
      title: title,
      completed: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };
  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id)
          return {
            ...todo,
            completed: !todo.completed,
          };
        return todo;
      })
    );
  };
  const removeTodo = (id: number) => {
    const shouldRemove = confirm("Are you sure?");
    if (shouldRemove) setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  return (
    <>
      <ToDoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} remove={removeTodo} />
    </>
  );
};
