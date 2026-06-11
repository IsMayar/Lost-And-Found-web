import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex gap-4 border-b p-4">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/report-lost">Lost</Link>
      <Link to="/report-found">Found</Link>
      <Link to="/dashboard">Dashboard</Link>
    </nav>
  );
};

export default Navbar;
