import { useState } from "react";
import TodoInput from "./TodoApp/TodoInput";
import TodoList from "./TodoApp/TodoList";

function App1() {
  const [todos, setTodos] = useState([]);

  const themTodo = (text) => {
    setTodos([...todos, text]);
  };

  const xoaTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Todo App</h1>
      <TodoInput themTodo={themTodo} />
      <TodoList todos={todos} xoaTodo={xoaTodo} />
    </div>
  );
}

export default App1;
