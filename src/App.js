import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Main from './components/MainComponent';
import './scss/style.css';
import './App.css';

class App extends Component {
    render() {
        return (
            <Main />
        );
    }
}

export default App;