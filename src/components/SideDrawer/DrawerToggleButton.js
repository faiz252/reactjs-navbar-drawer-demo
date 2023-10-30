import React from 'react';
import './DrawerToggleButton.css';

const DrawerToggleButton = props => (
    <button className="toggleButton" onClick={props.clickEvent}>
        <div className="toggleButtonLine" />
        <div className="toggleButtonLine" />
        <div className="toggleButtonLine" />
    </button>
);

export default DrawerToggleButton;