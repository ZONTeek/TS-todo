import React from "react";
import { ITodo } from "./interfaces";

type TodoListProps = {
  todos: ITodo[];
  toggleTodo(id: number): void;
  remove: (id: number) => void;
};

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleTodo,
  remove,
}) => {
  const removeHandler = (event: React.MouseEvent, id: number) => {
    event.preventDefault();
    remove(id);
  };

  return (
    <ul>
      {todos.map((todo) => {
        const classes = ["todo"];
        if (todo.completed) classes.push("completed");
        return (
          <li className={classes.join(" ")} key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={toggleTodo.bind(null, todo.id)}
              />
              <span>{todo.title}</span>
              <i
                className="material-icons red-text"
                onClick={(e) => removeHandler(e,todo.id)}
              >
                delete
              </i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};
