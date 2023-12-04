import React, { Component } from 'react';
import "../static/css/settings.css"

export const Settings = () => {
  const followers = 50;
  const following = 32;

  return (
    <div class="grid">
      <div class="image">
        <img
          src=""
          alt="Profile Image"
          width="300"
          height="200"
        />
        <button onClick="">
          Edit Photo
        </button>
        <div class="user-stats">
          <div>Followers: {followers}</div>
          <div>Following: {following}</div>
        </div>
      </div>
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
        <div class="divider"></div>
        <div class="checkbox">
          <label>
            <input
              type="checkbox"
              name="notifications"
              checked=""
              onChange=""
            />
            Notifications
          </label>
        </div>
        <div class="checkbox">
          <label>
            <input
              type="checkbox"
              name="dataSharing"
              checked=""
              onChange=""
            />
            Data Sharing
          </label>
        </div>
        <div class="divider"></div>
        <button onClick="">
          Backup Data
        </button>
      </div>
    </div>
  )
}

export default Settings;
