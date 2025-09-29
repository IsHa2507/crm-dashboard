import React from "react";
import { Link } from "react-router-dom";
import { Menu, Bell, Search } from "lucide-react";
import "./Navbar.css"; // <-- Import the CSS file

export default function Navbar() {
  return (
    <header className="crm-navbar">
      {/* Logo and Menu */}
      <div className="crm-navbar-left">
        <button className="crm-menu-btn">
          <Menu className="crm-menu-icon" />
        </button>
        <Link to="/" className="crm-logo">
          Converro
        </Link>
      </div>

      {/* Search Bar */}
      <div className="crm-navbar-search">
        <Search className="crm-search-icon" />
        <input type="text" placeholder="Search..." className="crm-search-input" />
      </div>

      {/* Actions */}
      <div className="crm-navbar-actions">
        <button className="crm-icon-btn">
          <Bell className="crm-bell-icon" />
        </button>
        <button className="crm-checkin-btn">Check In</button>
      </div>
    </header>
  );
}
