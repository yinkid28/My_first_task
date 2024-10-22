import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faEnvelope, faUserFriends, faChartBar, faAlignCenter, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'; // Import faTimes
import Assets from '../../Assets/Assets';
import './Navbar.css'; 

const Navbar = ({ toggleLeftMenu }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false); 
  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // New state for menu open/close

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu open/close
    toggleLeftMenu(); // Call toggleLeftMenu to show/hide LeftMenu
  };

  return (
    <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
      <FontAwesomeIcon 
        icon={isMenuOpen ? faTimes : faAlignCenter} // Change icon based on menu state
        size="lg" 
        className="menu-icon" 
        onClick={handleMenuClick} // Handle click for opening/closing menu
      />
      <div className="logo">
        <img src={Assets.logo} alt="Logo" />
      </div>
      <ul className={`nav-options ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/pages">Pages</Link></li>
        <li><Link to="/posts">Posts</Link></li>
        <li><Link to="/files">Files</Link></li>
        <li><Link to="/users">Users</Link></li>
      </ul>

      {/* Search Section */}
      <div className="search">
        <form onSubmit={handleSearchSubmit} style={{ position: 'relative' }}>
          <FontAwesomeIcon 
            icon={faSearch} 
            className="search-icon" 
          />
          <input
            type="text"
            placeholder="Try searching something new..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input" 
          />
        </form>
      </div>
      <div className="navbar-right-options">
        {/* Notification Icon */}
        <FontAwesomeIcon icon={faBell} size="lg" className="icon notification-icon" />
        
        {/* Message Icon */}
        <FontAwesomeIcon icon={faEnvelope} size="lg" className="icon message-icon" />
        
        {/* User Icon (Double like Friends) */}
        <FontAwesomeIcon icon={faUserFriends} size="lg" className="icon user-icon" />
        
        {/* Stats Icon */}
        <FontAwesomeIcon icon={faChartBar} size="lg" className="icon stats-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
