import React from "react";

function TodoItem({ todo, xoa }) {
  return (
    <li>
      {todo}
      <button onClick={xoa}>X</button>
    </li>
  );
}

export default TodoItem;
