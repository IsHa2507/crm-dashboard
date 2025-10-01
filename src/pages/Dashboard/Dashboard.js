import React, { useEffect, useState } from "react";
import { BarChart2 } from "lucide-react";
import { Clock } from "lucide-react";
import "./Dashboard.css";


export default function Dashboard() {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const hour = new Date().getHours();
    let greeting = "";
    if (hour < 12) greeting = "Good Morning";
    else if (hour < 17) greeting = "Good Afternoon";
    else greeting = "Good Evening";

    setMessages([
      `👋 ${greeting}`,
      "0 Reminders",
      "0 Scheduled Meetings",
      "0 New Leads",
    ]);
  }, []);

  useEffect(() => {
    if (messages.length === 0) return;

    let i = 0;
    let displayText = "";
    const text = messages[messageIndex];

    const interval = setInterval(() => {
      displayText = text.slice(0, i + 1);
      setCurrentMessage(displayText);
      i++;
      if (i === text.length) {
        clearInterval(interval);
        setTimeout(() => {
          setMessageIndex((prev) => (prev + 1) % messages.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [messageIndex, messages]);

  // Optional: dynamically get current time
  const now = new Date().toLocaleTimeString();


  return (
    <div className="crm-dashboard">
  <section className="crm-greeting">
    <div className="greeting-wrapper">
      <h2>
        <span className="fixed-text">Hi Converro&nbsp;</span>
        <span className="typed-text">{currentMessage}</span>
      </h2>

      <button className="checkin-btn">
        <div className="checkin-text">
          <span>Check In</span>
          <span className="checkin-time">{now}</span>
        </div>
        <Clock className="clock-icon" />
      </button>
    </div>
  </section>



     <div className="crm-dashboard-layout">
  {/* Left Column */}
  <div className="crm-left">
    {/* Top stats cards */}
    <section className="crm-cards">
      <div className="crm-card purple">
        <h4>Today Leads</h4>
        <p>0</p>
      </div>
      <div className="crm-card blue">
        <h4>Total Leads</h4>
        <p>1,039</p>
      </div>
      <div className="crm-card green">
        <h4>Deals</h4>
        <p>1</p>
      </div>
      <div className="crm-card teal">
        <h4>Clients</h4>
        <p>1</p>
      </div>
      <div className="crm-card orange">
        <h4>Follow-up Leads</h4>
        <p>15</p>
      </div>
      <div className="crm-card pink">
        <h4>Meeting Scheduled</h4>
        <p>5</p>
      </div>
    </section>

    {/* Stats*/}
    <section className="crm-section">
      
      <div className="crm-overview">
        <div className="crm-overview-card">
          <h5>Total Sales</h5>
          <p>₹0.00</p>
        </div>
        <div className="crm-overview-card">
          <h5>Avg. Sale Value</h5>
          <p>₹0.00</p>
        </div>
        <div className="crm-overview-card">
          <h5>Total Deals</h5>
          <p>3</p>
        </div>
        <div className="crm-overview-card">
          <h5>Admin</h5>
          <p>0</p>
        </div>
      </div>
       <div className="account-overview-headerbar">
      <h3>Account Overview</h3>
      <div className="account-overview-date">
        <input type="date" />
        <span> - </span>
        <input type="date" />
      </div>
    </div>
    </section>
    
  </div>

  {/* Right Column - Side Box */}
  <div className="crm-right">
    <aside className="crm-sidebox">
      <h3>Reminders</h3>
      <p>No Appointments Found.</p>
    </aside>

</div>


</div>


      {/* Revenue Graph */}
      <section className="crm-section">
        <h3>Revenue</h3>
        <div className="crm-chart-placeholder">
          <BarChart2 size={40} />
          <p>Graph Placeholder</p>
        </div>
      </section>

      {/* Reminders + Leads Collected */}
      <section className="crm-grid">
        <div className="crm-reminder">
          <h3>Reminders</h3>
          <p>No Appointments Found</p>
        </div>
        <div className="crm-leads">
          <h3>Leads Collected</h3>
          <ul>
            <li>Untouched: 0</li>
            <li>Follow-up Required: 0</li>
            <li>Not Answered: 0</li>
          </ul>
        </div>
      </section>

      {/* New Updates */}
      <section className="crm-section">
        <h3>New Updates!</h3>
        <div className="crm-update">
          <h4>Auto-Tag Team for Leads</h4>
          <p>
            Tagging multiple team members allows you to automatically assign and
            distribute leads, ensuring the right team members are notified and
            can act quickly. This improves response times and efficiency.
          </p>
        </div>
      </section>
    </div>
  );
}
