import { useDispatch } from "react-redux";
import { tang, giam } from "./store";

function ComponentB() {
  const dieuPhoi = useDispatch();

  return (
    <>
      <button onClick={() => dieuPhoi(tang())}>Tang</button>
      <button onClick={() => dieuPhoi(giam())}>Giam</button>
    </>
  );
}

export default ComponentB;
