import React from 'react';
import logo from '../assets/logo.jpg';
import '../App.css';

function MainComponent() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Welcome to Enigma!
                </p>
            </header>
        </div>
    );
}

export default MainComponent;