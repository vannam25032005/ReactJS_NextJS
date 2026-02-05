import { useState } from "react";

function TodoInput({ themTodo }) {
  const [text, setText] = useState("");

  const submit = () => {
    if (!text) return;
    themTodo(text);
    setText("");
  };

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={submit}>Thêm</button>
    </div>
  );
}

export default TodoInput;
