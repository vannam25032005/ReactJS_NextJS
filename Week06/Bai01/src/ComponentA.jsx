import { useSelector } from "react-redux";

function ComponentA() {
  const giaTri = useSelector((state) => state.boDem.giaTri);

  return <h2>Gia tri hien tai: {giaTri}</h2>;
}

export default ComponentA;
