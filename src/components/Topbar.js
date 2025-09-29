import React from "react";
import { Bell, Search, MessageCircle, Clock } from "lucide-react";
import {
  AppWindow,
  Bot,
  RotateCcw,
  QrCode,
  
} from "lucide-react";
import "./Navbar.css";

export default function Topbar() {
  return (
    <header className="crm-topbar">
      {/* Left side (Search bar) */}
      <div className="crm-topbar-left">
        <div className="crm-topbar-left">
        <button className="crm-btn active">
          <AppWindow size={18} /> App Store
        </button>
        <button className="crm-btn">
          <Bot size={18} />
        </button>
        <button className="crm-btn">
          <RotateCcw size={18} />
        </button>
        <button className="crm-btn">
          <QrCode size={18} />
        </button>
      </div>
        
      </div>

      {/* Right side icons */}
      <div className="crm-topbar-right">
        {/* WhatsApp */}
        <div className="crm-badge-wrapper">
          <button className="crm-app whatsapp">W</button>
          <span className="crm-badge">0</span>
        </div>

        {/* AI */}
        <div className="crm-badge-wrapper">
          <button className="crm-app ai">AI</button>
          <span className="crm-badge">0</span>
        </div>

        <Search size={18} />
        <input type="text" placeholder="Search..." className="crm-search" />
        <button className="crm-icon-btn">
          <MessageCircle size={18} />
        </button>
        <button className="crm-icon-btn">
          <Bell size={18} />
        </button>
         {/* Profile */}
        <div className="crm-profile">
          <img
            src="https://via.placeholder.com/24"
            alt="logo"
            className="crm-logo"
          />
          <span>Hi! Converro ▾</span>
        </div>
        {/* <button className="crm-checkin-btn">
          <Clock size={18} /> Check In
        </button> */}
      </div>
    </header>
  );
}
