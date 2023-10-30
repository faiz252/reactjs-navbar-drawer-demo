import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

class App extends Component {
    state = {
        isSideDrawerOpen: false
    };

    handleDrawerToggleClick = () => {
        this.setState((prevState) => {
            return {isSideDrawerOpen: !prevState.isSideDrawerOpen};
        });
    };

    handleBackdropClick = () => {
        this.setState({isSideDrawerOpen: false});
    };

    render() {
        let backdropElement;

        if (this.state.isSideDrawerOpen) {
            backdropElement = <Backdrop click={this.handleBackdropClick} />
        }
        return (
            <div style={{height: '100%'}}>
                <Toolbar drawerClickHandler={this.handleDrawerToggleClick} />
                <SideDrawer show={this.state.isSideDrawerOpen} />
                {backdropElement}
                <main style={{marginTop: '64px'}}>
                    <p>This is the page content!</p>
                </main>
            </div>
        );
    }
}

export default App;