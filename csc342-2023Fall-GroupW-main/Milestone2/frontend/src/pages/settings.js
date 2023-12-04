import React, { Component } from 'react';
import "../static/css/settings.css"
import api from '../static/js/APIClient';

export const Settings = () => {
  api.getCurrentUser().then(user => {
    const logout = async () => {
      await api.logout();
      window.location.reload();
    }

    return (
      <div class="container">
        <h1>Settings</h1>
          <div class="input">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              value=""
              onChange=""
            />
          </div>
          <div class="input">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              value=""
              onChange=""
            />
          </div>
          <button onClick="">
            Edit Profile
          </button>
          <button onClick={logout}>
            Logout  
          </button>
        </div>
    )
    });
}

export default Settings;
