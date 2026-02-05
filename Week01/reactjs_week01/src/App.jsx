import React from "react";
import ProductCard from "./ProductCard";
import Button from "./Button";

function App() {
  // return <ProductCard />;
  return (
    <div>
      <Button type="primary">Save</Button>
      <Button type="danger">Delete</Button>
      <Button type="success">Done</Button>
    </div>
  );
}

export default App;
