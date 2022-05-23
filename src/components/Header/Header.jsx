import { useNavigate } from "react-router-dom";
import "./Header.styles.css";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/", { replace: true });
  };

  return (
    <header>
      <img src="/img/goscrum.png" alt="logo" />
      <div onClick={handleLogout}>X</div>
    </header>
  );
};

export default Header;
