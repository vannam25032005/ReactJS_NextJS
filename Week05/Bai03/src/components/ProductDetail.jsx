import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();

  return (
    <div>
      {" "}
      <h1>Product ID: {id}</h1>{" "}
    </div>
  );
}
