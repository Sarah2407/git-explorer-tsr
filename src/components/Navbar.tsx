import { Link, Outlet } from "react-router-dom";
import "../styles/style.css";

interface NavbarProps {
  isLogged: boolean;
}

const Navbar = ({ isLogged }: NavbarProps) => {
  return (
    <>
      <nav>
        <Link to="/" className="logo-nav">
          Git Explorer
        </Link>
        <div className="link-cont">
          <Link to="/">Repos</Link>
          <Link to="/users">Users</Link>
          <Link to="/search">Search</Link>
          <Link to="/authProfile">Profile</Link>
          {!isLogged && <Link to="/login">Login</Link>}
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
