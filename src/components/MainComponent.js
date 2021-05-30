import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Music from './MusicComponent';
import Contact from './ContactComponent';
import StudentLogin from './StudentLoginComponent';
import StudentLinks from './StudentLinkComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        links: state.links,
        bios: state.bios,
        music: state.music
    };
};

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

    fetchViolinLinks = () => {
        fetch(url + 'violinlinks')
        .then(response => response.json())
        .then(result => {
            this.setState({links: result})
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        this.fetchViolinLinks();
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

export default withRouter(connect(mapStateToProps)(Main));