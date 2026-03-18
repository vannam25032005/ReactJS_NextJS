import { memo, useCallback, useState } from "react";

const initialTodos = Array.from({ length: 1000 }, (_, index) => ({
  id: index + 1,
  text: `Todo ${index + 1}`,
  completed: false,
}));

const TodoItem = memo(function TodoItem({ todo, onDelete, onToggle }) {
  console.log("render item", todo.id);

  return (
    <li
      style={{
        display: "flex",
        gap: 10,
        marginBottom: 8,
        alignItems: "center",
      }}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          flex: 1,
        }}
      >
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)}>Xóa</button>
    </li>
  );
});

function TodoInput({ inputValue, setInputValue, onAdd }) {
  return (
    <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
      <input
        type="text"
        value={inputValue}
        placeholder="Nhập todo..."
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={onAdd}>Thêm</button>
    </div>
  );
}

function TodoList({ todos, onDelete, onToggle }) {
  return (
    <ul style={{ maxHeight: 400, overflow: "auto", padding: 0 }}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
}

export default function TodoApp() {
  const [todos, setTodos] = useState(initialTodos);
  const [inputValue, setInputValue] = useState("");

  const onAdd = useCallback(() => {
    if (!inputValue.trim()) return;

    setTodos((prev) => [
      {
        id: Date.now(),
        text: inputValue,
        completed: false,
      },
      ...prev,
    ]);

    setInputValue("");
  }, [inputValue]);

  const onDelete = useCallback((id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  const onToggle = useCallback((id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Bài 4 - Todo List Performance</h2>
      <TodoInput
        inputValue={inputValue}
        setInputValue={setInputValue}
        onAdd={onAdd}
      />
      <TodoList todos={todos} onDelete={onDelete} onToggle={onToggle} />
    </div>
  );
}
