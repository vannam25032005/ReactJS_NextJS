import { useState } from "react";

export default function UserForm() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Thông tin người dùng:", user);
    alert(JSON.stringify(user, null, 2));
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Bài 1 - Form thông tin người dùng</h2>

      <form
        onSubmit={handleSubmit}
        style={{ display: "grid", gap: 12, maxWidth: 400 }}
      >
        <input
          type="text"
          name="name"
          placeholder="Nhập tên"
          value={user.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Nhập email"
          value={user.email}
          onChange={handleChange}
        />

        <input
          type="number"
          name="age"
          placeholder="Nhập tuổi"
          value={user.age}
          onChange={handleChange}
        />

        <button type="submit">Gửi</button>
      </form>

      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}
