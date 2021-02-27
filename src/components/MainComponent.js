import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Footer from './FooterComponent';
import { BIOS } from '../shared/bios';
import { Switch, Route, Redirect, withRouter, } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bios: BIOS,
            isStudent: false
        }
    }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' render={() => <Home />} />
                    <Route exact path='/about' render={() => <About bios={this.state.bios} /> }/>
                    <Route path='/music' render={() => {}} />
                    <Route path='/students' render={() => {}} />
                    <Route path='/contact' render={() => {}} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default Main;