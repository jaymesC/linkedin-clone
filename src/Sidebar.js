import { Avatar } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'

function Sidebar() {
    return (
      <div className="sidebar">
        <div className="sidebar__top">
          <img src="" alt="" />
          <Avatar className="sidebar__avatar" />
          <h2>Clement James</h2>
          <h4>clementjaymes@gmail.com</h4>
        </div>

        <div className="sidebar__stats">
          <div className="sidebar__stat">
            <p>Who viewed you</p>
            <p className="sidebar__statNumber">2,671</p>
          </div>
          <div className="sidebar__stat">
            <p>Who viewed you</p>
            <p className="sidebar__statNumber">2,506</p>
          </div>
        </div>

        <div className="sidebar__bottom">
            <p>Recent</p>
        </div>
      </div>
    );
}

export default Sidebar
