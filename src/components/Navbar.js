import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Home,
  Users,
  Settings,
  Mail,
  BarChart2,
  MessageSquare,
  Phone,
  FileText,
  ListChecks,
  UserCog,
  ChevronRight,
} from "lucide-react";
import "./Navbar.css";

export default function Sidebar() {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <aside className="crm-sidebar">
      {/* Header with logo & plan */}
      <div className="crm-sidebar-header">
        <img src="/logo192.png" alt="Logo" className="crm-sidebar-logo-img" />
        <div>
          <h2 className="crm-sidebar-title">Hi, Converro</h2>
          <p className="crm-sidebar-plan">Plan: Business</p>
        </div>
      </div>

      {/* Menu */}
      <nav className="crm-sidebar-menu">
        <Link to="/dashboard" className="crm-sidebar-link">
          <Home size={18} /> Dashboard
        </Link>

        <button
          className="crm-sidebar-link"
          onClick={() => toggleMenu("ads")}
        >
          <BarChart2 size={18} /> Ads Manager
          <ChevronRight
            size={16}
            className={`arrow ${activeMenu === "ads" ? "open" : ""}`}
          />
        </button>

        <button
          className="crm-sidebar-link"
          onClick={() => toggleMenu("leads")}
        >
          <Users size={18} /> Lead Manager
          <ChevronRight
            size={16}
            className={`arrow ${activeMenu === "leads" ? "open" : ""}`}
          />
        </button>

        <button
          className="crm-sidebar-link"
          onClick={() => toggleMenu("automation")}
        >
          <Settings size={18} /> Automation
          <ChevronRight
            size={16}
            className={`arrow ${activeMenu === "automation" ? "open" : ""}`}
          />
        </button>

        <button
          className="crm-sidebar-link"
          onClick={() => toggleMenu("marketing")}
        >
          <Mail size={18} /> Marketing
          <ChevronRight
            size={16}
            className={`arrow ${activeMenu === "marketing" ? "open" : ""}`}
          />
        </button>

        <button
          className="crm-sidebar-link"
          onClick={() => toggleMenu("sms")}
        >
          <MessageSquare size={18} /> SMS Marketing
          <ChevronRight
            size={16}
            className={`arrow ${activeMenu === "sms" ? "open" : ""}`}
          />
        </button>

        <button
          className="crm-sidebar-link"
          onClick={() => toggleMenu("ivr")}
        >
          <Phone size={18} /> IVR Services
          <ChevronRight
            size={16}
            className={`arrow ${activeMenu === "ivr" ? "open" : ""}`}
          />
        </button>

        <Link to="/reports" className="crm-sidebar-link">
          <FileText size={18} /> Reports
        </Link>

        <Link to="/tasks" className="crm-sidebar-link">
          <ListChecks size={18} /> Task Management
        </Link>

        <Link to="/team" className="crm-sidebar-link">
          <UserCog size={18} /> Team Member
        </Link>

        <Link to="/settings" className="crm-sidebar-link">
          <Settings size={18} /> Settings
        </Link>
      </nav>

      {/* Footer */}
      <div className="crm-sidebar-footer">
        <button className="crm-logout">Logout</button>
      </div>
    </aside>
  );
}
