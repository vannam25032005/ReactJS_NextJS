import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/profile");
  };

  return (
    <div>
      <h1>Đăng nhập</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
