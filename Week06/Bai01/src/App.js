import { Provider } from "react-redux";
import cuaHang from "./store";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";

export default function App() {
  return (
    <Provider store={cuaHang}>
      <ComponentA />
      <ComponentB />
    </Provider>
  );
}
