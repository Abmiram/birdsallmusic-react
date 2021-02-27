import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Music from './MusicComponent';
import Footer from './FooterComponent';
import { BIOS } from '../shared/bios';
import { MUSIC } from '../shared/music';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bios: BIOS,
            music: MUSIC,
            isStudent: false,
        }
    }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' render={() => <Home />} />
                    <Route exact path='/about' render={() => <About bios={this.state.bios} /> }/>
                    <Route path='/music' render={() => <Music music={this.state.music} />} />
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