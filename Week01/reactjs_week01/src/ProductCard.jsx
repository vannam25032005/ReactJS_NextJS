import React from "react";
import "./ProductCard.css";

function ProductCard({ image, name, price }) {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-img" />
      <h3>{name}</h3>
      <p className="price">{price}₫</p>
      <button className="add-btn">Add to cart</button>
    </div>
  );
}

export default ProductCard;
