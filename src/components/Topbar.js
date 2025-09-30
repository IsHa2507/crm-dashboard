import React, { useState } from "react";
import { Bell, Search, MessageCircle } from "lucide-react";
import { AppWindow, RotateCcw, QrCode } from "lucide-react";
import { FaWhatsapp, FaRobot } from "react-icons/fa"; 
import { ChevronUp } from "lucide-react"; // Arrow icon
import "./Navbar.css";

export default function Topbar() {
  const [profileOpen, setProfileOpen] = useState(false);

  const toggleProfile = () => {
    setProfileOpen(!profileOpen);
  };

  return (
    <header className="crm-topbar">
      {/* Left side */}
      <div className="crm-topbar-left">
        <button className="crm-btn active">
          <AppWindow size={18} /> App Store
        </button>
        <button className="crm-btn">
          <FaRobot size={18} />
        </button>
        <button className="crm-btn">
          <RotateCcw size={18} />
        </button>
        <button className="crm-btn">
          <QrCode size={18} />
        </button>
      </div>

      {/* Right side */}
      <div className="crm-topbar-right">
        {/* WhatsApp */}
        <div className="crm-badge-wrapper">
          <button className="crm-app whatsapp">
            <FaWhatsapp size={18} />
          </button>
          {/* <span className="crm-badge">0</span> */}
        </div>

        {/* AI */}
        <div className="crm-badge-wrapper">
          <button className="crm-app ai">
            <FaRobot size={18} />
          </button>
          {/* <span className="crm-badge">0</span> */}
        </div>

        <Search size={18} />
        <input type="text" placeholder="Search..." className="crm-search" />
        <button className="crm-icon-btn">
          <MessageCircle size={18} />
        </button>
        <button className="crm-icon-btn">
          <Bell size={18} />
        </button>

        {/* Profile Dropdown */}
        <div className="crm-profile" onClick={toggleProfile}>
          <img
            src="https://via.placeholder.com/24"
            alt="logo"
            className="crm-logo"
          />
          <span>Hi! Converro</span>
          <ChevronUp 
            size={16} 
            className={`profile-arrow ${profileOpen ? "open" : ""}`} 
          />

          {profileOpen && (
            <div className="crm-profile-dropdown">
              <a href="/dashboard">Dashboard</a>
              <a href="/edit-profile">Edit Profile</a>
              <a href="/device-manager">Device Manager</a>
              <a href="/api-keys">API Keys</a>
              <a href="/logout">Logout</a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
