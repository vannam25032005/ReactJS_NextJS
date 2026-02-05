import { useState } from "react";

function Form() {
  const [ten, setTen] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <input
        placeholder="Nhập tên"
        value={ten}
        onChange={(e) => setTen(e.target.value)}
      />

      <input
        placeholder="Nhập email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <h3>Kết quả:</h3>
      <p>Tên: {ten}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default Form;
