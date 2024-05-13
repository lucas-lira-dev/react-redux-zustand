import React from "react";
import { useAppSelector } from "../store";

const TodoList: React.FC = () => {
  const todos = useAppSelector((store) => store.todo);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </ul>
  );
};

export default TodoList;
