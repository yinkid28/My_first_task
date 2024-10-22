import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faUserCheck } from '@fortawesome/free-solid-svg-icons'; 
import { menuOptions, userImages } from '../../Assets/Assets'; 
import './LeftMenu.css'; // Import LeftMenu CSS

const LeftMenu = ({ isVisible }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdownToggle = (option) => {
    setActiveDropdown(activeDropdown === option ? null : option);
  };

  return (
    <div className={`left-menu ${isVisible ? 'visible' : ''}`}>
      <ul className="left-menu-options">
        {menuOptions.map((option, index) => (
          <li key={index}>
            <Link
              to={option.path}
              className={`menu-link ${activeDropdown === option.name ? 'active' : ''}`}
              onClick={() => handleDropdownToggle(option.name)}
            >
              <div className="menu-content">
                <FontAwesomeIcon icon={option.icon} className="menu-icon" />
                <span>{option.name}</span>
              </div>
              <div className={`notification-badge ${activeDropdown === option.name ? 'badge-active' : ''}`}>
                <div className="circle">
                  <span className="number">{option.count}</span>
                </div>
                <FontAwesomeIcon 
                  icon={activeDropdown === option.name ? faChevronUp : faChevronDown} 
                  className="dropdown-icon" 
                />
              </div>
            </Link>
            {activeDropdown === option.name && option.name === 'User' && (
              <div className="dropdown">
                <h4>{option.name}</h4>
                <hr />
                {userImages.map((image, userIndex) => (
                  <div key={userIndex} className="user-detail">
                    <img src={image} alt={`User ${userIndex + 1}`} className="profile-pic" />
                    <span className="user-name">User {userIndex + 1}</span>
                    <span className="user-status">Active <FontAwesomeIcon icon={faUserCheck} /></span>
                  </div>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftMenu;
