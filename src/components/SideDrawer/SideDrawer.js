import React from 'react';
import './SideDrawer.css';

const SideDrawer = props => {
    let drawerClasses = props.show ? 'side-drawer open' : 'side-drawer';
    return (
        <nav className={drawerClasses}>
            <ul>
                <li>
                    <a href={process.env.PRODUCTS_URL}>Products</a>
                </li>
                <li>
                    <a href={process.env.USERS_URL}>Users</a>
                </li>
            </ul>
        </nav>
    );
};

export default SideDrawer;