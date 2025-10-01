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
  Calendar,
  DollarSign,
  Radio,
  Share2,
  Database,
  Headphones,
   Wrench,
  LogOut,
  MessageCircle,
} from "lucide-react";
import "./Navbar.css";

export default function Sidebar() {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  // Dropdown items
  const menus = {
    ads: ["Create Campaign", "Campaign", "Ads Leads"],
    leads: [
      "Groups",
      "Contacts",
      "Leads",
      "Clients",
      "Deals",
      "Sales Pipelines",
      "Reminder Calendar",
      "Deal Close Logs",
    ],
    automation: ["History Log"],
    team: [
      "Member Attendance",
      "Converro Owner",
      "Team Member",
      "Ravi Verma",
      "Jyoty Pandey",
      "Chavvi Sharma",
      "Nikhil Agarwal",
      "Anmol Soni",
    ],
    whatsapp: [
      "Dashboard",
      "Live Chat",
      "Broadcast",
      "History",
      "Templates",
      "Workflows",
      "Connect API",
    ],
    calendar: ["My Events", "Scheduled Events"],
    invoice: ["Quotation & Estimation", "Invoices", "Proforma Invoices", "Proposals"],
    sms: ["Compose", "All Sent SMS", "Entity ID", "Sender ID", "Templates"],
    email: ["Statistics", "Campaigns", "Email List", "Email Templates", "Campaign Report"],
    affiliate: ["Affiliate Sites", "Affiliate Members", "Track Sales", "Commission", "Payouts"],
    ivr: ["Call Logs", "Call Flow", "Blacklist", "Subscribe"],
    voice: ["Templates", "Campaigns", "Subscribe Call", "OBD Reports"],
    google: ["Google Leads", "Served Data", "Groups", "Google API Keys"],
    tasks: ["All Tasks"],
    ticket: ["All Tickets"],
    utility: ["Media Tools"],
  };

  // Render Dropdown
  const renderDropdown = (menuKey) =>
    activeMenu === menuKey && (
      <div className="crm-sidebar-dropdown">
        {menus[menuKey].map((item, idx) => (
          <Link key={idx} to={`/${menuKey}/${item.toLowerCase().replace(/\s+/g, "-")}`}>
            {item}
          </Link>
        ))}
      </div>
    );

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
  <Home size={18} />
  <span>Dashboard</span>   {/* ✅ wrap text */}
</Link>

        {/* Dropdown Menus */}
        <button className="crm-sidebar-link" onClick={() => toggleMenu("ads")}>
          <BarChart2 size={18} /> Ads Manager
          <ChevronRight size={16} className={`arrow ${activeMenu === "ads" ? "open" : ""}`} />
        </button>
        {renderDropdown("ads")}

        <button className="crm-sidebar-link" onClick={() => toggleMenu("leads")}>
          <Users size={18} /> Lead Manager
          <ChevronRight size={16} className={`arrow ${activeMenu === "leads" ? "open" : ""}`} />
        </button>
        {renderDropdown("leads")}

        <button className="crm-sidebar-link" onClick={() => toggleMenu("automation")}>
          <Settings size={18} /> Automation
          <ChevronRight size={16} className={`arrow ${activeMenu === "automation" ? "open" : ""}`} />
        </button>
        {renderDropdown("automation")}

        <button className="crm-sidebar-link" onClick={() => toggleMenu("team")}>
          <UserCog size={18} /> Team Member
          <ChevronRight size={16} className={`arrow ${activeMenu === "team" ? "open" : ""}`} />
        </button>
        {renderDropdown("team")}

        <button className="crm-sidebar-link" onClick={() => toggleMenu("whatsapp")}>
          <MessageCircle size={18} /> WhatsApp Business API
          <ChevronRight size={16} className={`arrow ${activeMenu === "whatsapp" ? "open" : ""}`} />
        </button>
        {renderDropdown("whatsapp")}

        <button className="crm-sidebar-link" onClick={() => toggleMenu("calendar")}>
          <Calendar size={18} /> My Calendar
          <ChevronRight size={16} className={`arrow ${activeMenu === "calendar" ? "open" : ""}`} />
        </button>
        {renderDropdown("calendar")}

        <button className="crm-sidebar-link" onClick={() => toggleMenu("invoice")}>
          <DollarSign size={18} /> Invoice & Quotation
          <ChevronRight size={16} className={`arrow ${activeMenu === "invoice" ? "open" : ""}`} />
        </button>
        {renderDropdown("invoice")}

        <button className="crm-sidebar-link" onClick={() => toggleMenu("sms")}>
          <MessageSquare size={18} /> SMS Marketing
          <ChevronRight size={16} className={`arrow ${activeMenu === "sms" ? "open" : ""}`} />
        </button>
        {renderDropdown("sms")}

        <button className="crm-sidebar-link" onClick={() => toggleMenu("email")}>
          <Mail size={18} /> Email Marketing
          <ChevronRight size={16} className={`arrow ${activeMenu === "email" ? "open" : ""}`} />
        </button>
        {renderDropdown("email")}

        <button className="crm-sidebar-link" onClick={() => toggleMenu("affiliate")}>
          <Share2 size={18} /> Affiliate Marketing
          <ChevronRight size={16} className={`arrow ${activeMenu === "affiliate" ? "open" : ""}`} />
        </button>
        {renderDropdown("affiliate")}

        <button className="crm-sidebar-link" onClick={() => toggleMenu("ivr")}>
          <Phone size={18} /> IVR Services
          <ChevronRight size={16} className={`arrow ${activeMenu === "ivr" ? "open" : ""}`} />
        </button>
        {renderDropdown("ivr")}

        <button className="crm-sidebar-link" onClick={() => toggleMenu("voice")}>
          <Radio size={18} /> Voice Call OBD
          <ChevronRight size={16} className={`arrow ${activeMenu === "voice" ? "open" : ""}`} />
        </button>
        {renderDropdown("voice")}

        <button className="crm-sidebar-link" onClick={() => toggleMenu("google")}>
          <Database size={18} /> Google Data Extractor
          <ChevronRight size={16} className={`arrow ${activeMenu === "google" ? "open" : ""}`} />
        </button>
        {renderDropdown("google")}

        <button className="crm-sidebar-link" onClick={() => toggleMenu("tasks")}>
          <ListChecks size={18} /> Task Management
          <ChevronRight size={16} className={`arrow ${activeMenu === "tasks" ? "open" : ""}`} />
        </button>
        {renderDropdown("tasks")}

        <button className="crm-sidebar-link" onClick={() => toggleMenu("ticket")}>
          <Headphones size={18} /> Ticket Center
          <ChevronRight size={16} className={`arrow ${activeMenu === "ticket" ? "open" : ""}`} />
        </button>
        {renderDropdown("ticket")}

        <button className="crm-sidebar-link" onClick={() => toggleMenu("utility")}>
          < Wrench size={18} /> Utility Tools
          <ChevronRight size={16} className={`arrow ${activeMenu === "utility" ? "open" : ""}`} />
        </button>
        {renderDropdown("utility")}
      </nav>

      {/* Footer */}
      <div className="crm-sidebar-footer">
        <button className="crm-logout">
          <LogOut size={16} /> Logout
        </button>
      </div>
    </aside>
  );
}
