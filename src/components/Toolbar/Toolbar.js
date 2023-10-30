import React from 'react';
import fs from 'fs';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const ToolbarComponent = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar__toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar__logo"><a href={process.env.HOME_URL}>THE LOGO</a></div>
            <div className="spacer" />
            <div className="toolbarNavigationItems">
                <ul>
                    <li><a href={process.env.PRODUCTS_URL}>Products</a></li>
                    <li><a href={process.env.USERS_URL}>Users</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default ToolbarComponent;