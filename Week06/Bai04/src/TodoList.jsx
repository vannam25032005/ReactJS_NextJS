import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

function TodoList() {
  const danhSach = useSelector((state) => state.congViec.danhSach);

  return (
    <ul>
      {danhSach.map((congViec) => (
        <TodoItem key={congViec.id} congViec={congViec} />
      ))}
    </ul>
  );
}

export default TodoList;
