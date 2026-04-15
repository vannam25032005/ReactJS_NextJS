import { Link } from "react-router-dom";
import products from "../components/productsData";

export default function Products() {
  return (
    <div>
      <h1>Danh sách sản phẩm</h1>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>
              {product.name} - ${product.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
