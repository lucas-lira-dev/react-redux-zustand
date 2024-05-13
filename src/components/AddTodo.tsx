import React, { FormEvent } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store";

const AddTodo: React.FC = () => {
  const [newTodo, setNewTodo] = React.useState("");
  const dispatch = useDispatch();

  function handleNewTodo(e: FormEvent) {
    e.preventDefault();

    dispatch(add({ newTodo }));
    setNewTodo("");
  }

  return (
    <form onSubmit={(e) => handleNewTodo(e)}>
      <input
        type="text"
        placeholder="Novo to-do"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button>Adicionar</button>
    </form>
  );
};

export default AddTodo;
