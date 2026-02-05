import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, xoaTodo }) {
  return (
    <ul>
      {todos.map((t, i) => (
        <TodoItem key={i} todo={t} xoa={() => xoaTodo(i)} />
      ))}
    </ul>
  );
}

export default TodoList;
