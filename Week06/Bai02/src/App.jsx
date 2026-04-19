import { useSelector } from "react-redux";
import ThanhDieuKhien from "./ThanhDieuKhien";
import "./App.css";

function App() {
  const cheDo = useSelector((state) => state.giaoDien.cheDo);

  return (
    <div className={cheDo === "dark" ? "ungDung toi" : "ungDung sang"}>
      <h1>Theme Toggle</h1>
      <p>Che do hien tai: {cheDo}</p>
      <ThanhDieuKhien />
    </div>
  );
}

export default App;
