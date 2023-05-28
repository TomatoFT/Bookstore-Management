import React from 'react';
import './AdminPage.css';

function AdminPage() {
  return (
    <div className="admin-page">
      <h1>Welcome, Admin!</h1>
      <p>This is the admin page of the website.</p>
      <div className="section">
        <h2>User Management</h2>
        <ul>
          <li>Add User</li>
          <li>Edit User</li>
          <li>Delete User</li>
        </ul>
      </div>
      <div className="section">
        <h2>Content Management</h2>
        <ul>
          <li>Add Content</li>
          <li>Edit Content</li>
          <li>Delete Content</li>
        </ul>
      </div>
    </div>
  );
}

export default AdminPage;
