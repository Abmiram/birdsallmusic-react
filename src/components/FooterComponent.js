import React, { Component } from 'react';

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
                                <li>Home</li>
                                <li>About</li>
                                <li>Music</li>
                                <li>Students</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div className="col-10 text-right">
                            <a role="button" className="btn btn-link" href="tel:+7194477237">
                                <p><i className="fa fa-phone"></i>
                            1-719-447-7237</p>
                            </a><br />
                            <a role="button" className="btn btn-link" href="mailto:ross.birdsall9@gmail.com">
                                <p><i className="fa fa-envelope-o"></i> ross.birdsall9@gmail.com</p>
                            </a><br />
                            <a role="button" className="btn btn-link" href="https://www.linkedin.com/in/ross-birdsall-85950311b/">
                                <p>Website by Ross Birdsall</p>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;