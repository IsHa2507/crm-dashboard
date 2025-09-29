import React from "react";
import { Bell, Search, MessageCircle, Clock } from "lucide-react";
import "./Navbar.css";

export default function Topbar() {
  return (
    <header className="crm-topbar">
      {/* Left side (Search bar) */}
      <div className="crm-topbar-left">
        <Search size={18} />
        <input type="text" placeholder="Search..." className="crm-search" />
      </div>

      {/* Right side icons */}
      <div className="crm-topbar-right">
        <button className="crm-icon-btn">
          <MessageCircle size={18} />
        </button>
        <button className="crm-icon-btn">
          <Bell size={18} />
        </button>
        <button className="crm-checkin-btn">
          <Clock size={18} /> Check In
        </button>
      </div>
    </header>
  );
}
