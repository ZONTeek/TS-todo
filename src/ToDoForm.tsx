import React from "react";
import { useRef } from "react";

interface TodoFormProps {
    addTodo(title:string):void
}

export const ToDoForm: React.FC<TodoFormProps> = (props) => {

  const ref = useRef<HTMLInputElement>(null);
  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      props.addTodo(ref.current!.value)
      ref.current!.value = "";
    }
  };

  return (
    <div className="input-field mt2">
      <input
        ref={ref}
        id="title"
        type="text"
        placeholder="Введите дело"
        onKeyPress={keyPressHandler}
      />
      <label htmlFor="title" className="active">
        Введите дело
      </label>
    </div>
  );
};
