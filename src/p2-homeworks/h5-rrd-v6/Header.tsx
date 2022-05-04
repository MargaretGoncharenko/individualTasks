import React from 'react';
import {NavLink} from 'react-router-dom';
import h from "./Header.module.css";

function Header() {
    return (
        <div className={h.graduating}>
            <NavLink to={'/pre-junior'}>pre-junior</NavLink>
            <NavLink to={'/junior'}>junior</NavLink>
            <NavLink to={'/junior-plus'}>junior+</NavLink>
            <span className={h.menu}>menu</span>
            <a className={h.square}></a>


        </div>
    )
}

export default Header
