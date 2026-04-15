import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/products">Products</Link> |{" "}
        <Link to="/cart">Cart</Link> | <Link to="/login">Login</Link> |{" "}
        <Link to="/profile">Profile</Link>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}
