import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainApp from './MainApp';
import registerAppServiceWorker from './registerAppServiceWorker';

try {
    ReactDOM.render(<MainApp />, document.getElementById('root'));
    registerAppServiceWorker();
} catch (error) {
    console.log('Rendering Error: ' + error);
    throw error;
}