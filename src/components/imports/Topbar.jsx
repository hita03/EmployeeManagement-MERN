import React from 'react'
import "./topbar.css"
// import {NotificationsSharpIcon} from '@mui/icons-material/NotificationsSharp';

export default function Topbar() {
  return (
    <div>
      <div className="topbar">
        <div className="topbarWrapper">
          <div className="topLeft">
            <span className="logo">Admin</span>
          </div>
          <div className="topRight">
            <div className="topbarIconContainer topbarIconDarkMode">
              {/* Dark Mode logo */}
              <i className="fas fa-moon"></i>
            </div>
            <div className="topbarIconContainer">
              {/* notification logo */}
              <i className="fas fa-bell"></i>
              <span className="topIconBadge">3</span>
            </div>
            <div className="topbarIconContainer">
              {/* language logo */}
              <i className="fas fa-globe"></i>
            </div>
            <img src="https://source.unsplash.com/random/?girl" alt="" className="topAvatar" />
          </div>
        </div>
      </div>

    </div>
  )
}
