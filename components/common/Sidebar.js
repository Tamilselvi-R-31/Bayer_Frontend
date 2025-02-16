import React from 'react';
import './Sidebar.css';  // You can use this to style your sidebar

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Bayer Health</h2>
      <ul className="sidebar-links">
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/my-profile">My Profile</a></li>
        <li><a href="/health-metrics">Health Metrics</a></li>
        <li><a href="/messages">Messages</a></li>
        <li><a href="/logout">Logout</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
