import React from "react";

const AdminPanel = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>👑 Admin Panel</h1>
      <p>Welcome, Admin! Here’s your control center 🔧</p>

      <ul>
        <li>📊 View All Users</li>
        <li>➕ Add New Admins</li>
        <li>🗑️ Delete Users</li>
        <li>⚙️ System Settings</li>
      </ul>
    </div>
  );
};

export default AdminPanel;
