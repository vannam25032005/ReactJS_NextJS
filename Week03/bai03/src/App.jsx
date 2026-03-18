import { useMemo, useState } from "react";

function generateProducts(count = 3000) {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    name: `Sản phẩm ${index + 1}`,
    price: Math.floor(Math.random() * 1000000) + 10000,
  }));
}

const allProducts = generateProducts(3000);

export default function ProductFilter() {
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const filteredProducts = useMemo(() => {
    console.time("filter-products");

    const result = allProducts
      .filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()),
      )
      .filter((product) =>
        minPrice === "" ? true : product.price >= Number(minPrice),
      )
      .filter((product) =>
        maxPrice === "" ? true : product.price <= Number(maxPrice),
      )
      .sort((a, b) =>
        sortOrder === "asc" ? a.price - b.price : b.price - a.price,
      );

    console.timeEnd("filter-products");
    return result;
  }, [searchTerm, minPrice, maxPrice, sortOrder]);

  const totalPrice = useMemo(() => {
    console.time("calculate-total");

    const total = filteredProducts.reduce((sum, product) => {
      return sum + product.price;
    }, 0);

    console.timeEnd("calculate-total");
    return total;
  }, [filteredProducts]);

  return (
    <div style={{ padding: 20 }}>
      <h2>Bài 3 - Product Filter + Tổng tiền</h2>

      <div
        style={{ display: "grid", gap: 10, maxWidth: 500, marginBottom: 20 }}
      >
        <input
          type="text"
          placeholder="Tìm theo tên"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <input
          type="number"
          placeholder="Giá tối thiểu"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />

        <input
          type="number"
          placeholder="Giá tối đa"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">Giá tăng dần</option>
          <option value="desc">Giá giảm dần</option>
        </select>
      </div>

      <p>Số sản phẩm sau lọc: {filteredProducts.length}</p>
      <p>Tổng tiền: {totalPrice.toLocaleString()} VND</p>

      <ul style={{ maxHeight: 300, overflow: "auto" }}>
        {filteredProducts.slice(0, 50).map((product) => (
          <li key={product.id}>
            {product.name} - {product.price.toLocaleString()} VND
          </li>
        ))}
      </ul>
    </div>
  );
}
