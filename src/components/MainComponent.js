import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Music from './MusicComponent';
import Contact from './ContactComponent';
import StudentLogin from './StudentLoginComponent';
import StudentLinks from './StudentLinkComponent';
import Footer from './FooterComponent';
import { BIOS } from '../shared/bios';
import { MUSIC } from '../shared/music';
import { LINKS } from '../shared/links';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bios: BIOS,
            music: MUSIC,
            links: LINKS,
            isStudent: false,
            isAdmin: false,
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
                    <Route 
                        path='/students' 
                        render={() => !this.state.isStudent ? <StudentLogin /> : <StudentLinks links={this.state.links} admin={this.state.isAdmin} />} 
                    />
                    <Route path='/contact' render={() => <Contact />} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default Main;