import React from "react";
import { BarChart2 } from "lucide-react";
import "../pages/Dashboard.css";

export default function Dashboard() {
  return (
    <div className="crm-dashboard">
      {/* Greeting */}
      <section className="crm-greeting">
        <h2>Hi Converro 👋 Good Afternoon</h2>
      </section>

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

      {/* Account overview */}
      <section className="crm-section">
        <h3>Account Overview</h3>
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
        </div>
      </section>

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
