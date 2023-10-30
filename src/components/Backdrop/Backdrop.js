import React from 'react';
import fs from 'fs';

import './Backdrop.css';

let logStream = fs.createWriteStream("./debug.log", { flags: 'a' });

function logToFile(message) {
    logStream.write(message + "\n");
}

const Backdrop = props => {
    try {
        return (
            <div className="backdrop" onClick={props.onClickEvent} />
        );
    } catch (error) {
        logToFile('Backdrop Error: ' + error)
        throw error;
    }
};

export default Backdrop;