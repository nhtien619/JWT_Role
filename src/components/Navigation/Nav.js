import React from 'react';
import './Nav.scss';
import { Link, NavLink } from "react-router-dom";

const Nav = (props) => {
    return (
        <div class="topnav">
            <NavLink to="/home"
                className={({ isActive, isPending }) => {
                    return isPending ? "pending" : isActive ? "active" : "";
                }}
                relative="path">Home</NavLink>
            <NavLink to="/todos" relative="path">Todos</NavLink>
            <NavLink to="/users" relative="path">User</NavLink>
        </div>
    );
}

export default Nav;