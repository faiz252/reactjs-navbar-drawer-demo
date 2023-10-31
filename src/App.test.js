import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import fs from 'fs';

const logStream = fs.createWriteStream("./debug.log", { flags: 'a' });

const logToFile = (message) => {
    console.log(message);
    logStream.write(message + "\n");
}

it('rendersWithoutCrashing', () => {
    try {
        const divElement = document.createElement('div');
        ReactDOM.render(<App />, divElement);
        ReactDOM.unmountComponentAtNode(divElement);
        logToFile('Rendering Successful');
    } catch (error) {
        logToFile('Rendering Error: ' + error);
        throw error;
    }
});