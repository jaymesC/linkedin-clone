import { Avatar } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="" alt="" />
                <Avatar className="sidebar__avatar"/>
                <h2>Clement James</h2>
                <h4>clementjaymes@gmail.com</h4>
            </div>
            
        </div>
    )
}

export default Sidebar
