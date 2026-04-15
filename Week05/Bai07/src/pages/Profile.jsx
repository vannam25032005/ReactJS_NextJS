import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Profile() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      <h1>Profile</h1>
      <p>Xin chào {user.name}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
