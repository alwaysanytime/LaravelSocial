import React, { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Sidebar = (props) => {

    const user = useSelector(state => state.auth);

    return <div className="d-flex flex-column justify-content-between sidebar bg-white" id="sidebar">
        <div className="d-flex flex-column main-sidebar">
            <Link to={user.loggedin ? "/home" : "/"} className="logo"><img src="/images/logo/Logo.svg" className="size-50" style={{marginLeft: 10}}/></Link>
            <NavLink to="/home"><i className="bi bi-house"></i> <span>Home</span></NavLink>
            <NavLink to={"/" + user.username}><i className="bi bi-person"></i> <span>Profile</span></NavLink>
            <NavLink to={"/follow"}><i className="bi bi-people"></i> <span>Follows</span></NavLink>
            <NavLink to="/analytics"><i className="bi bi-bar-chart"></i> <span>Analytics</span></NavLink>
            <NavLink to="/settings"><i className="bi bi-gear"></i> <span>Settings</span></NavLink>
        </div>
        <NavLink to="/feedback" className="feedback-link"><i className="bi bi-chat-left-text"></i> <span>Feedback</span></NavLink>
    </div>
};

export default Sidebar;