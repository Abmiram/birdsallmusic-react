import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-2">
                            <ul className="list-unstyled">
                                <li><Link to="/home">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/music">Music</Link></li>
                                <li><Link to="/students">Students</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="col-10 text-right">
                            <ul className="list-unstyled">
                                <li><a href="tel:+7194477237">
                                    <i className="fa fa-phone" /> 1-719-447-7237
                            </a></li>
                                <li><a href="mailto:ross.birdsall9@gmail.com">
                                    <i className="fa fa-envelope-o" /> ross.birdsall9@gmail.com
                            </a></li>
                                <a href="https://www.linkedin.com/in/ross-birdsall-85950311b/">
                                    Website by Ross Birdsall
                            </a>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;