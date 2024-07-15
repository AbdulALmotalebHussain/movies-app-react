import './css/Navbar.css';
import { VscAccount } from "react-icons/vsc";

export default function Navbar() {
  return (
    <div className="navbar">

    <div className="navbar-container">
      <VscAccount className="navbar-icon"  />
        <div className="navbar-item search-input">
          <input type="text" placeholder="Search..." className="search-input-field" />
        </div>
      </div>
    </div>
  );
}

