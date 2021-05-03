import React, { Component } from 'react';
import { Form, FormGroup, Input, Label, Row } from 'reactstrap';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            message: "",
            status: "Submit"
        }
    }

     handleSubmit(event) {

    }

    render() {
        let buttonText = this.state.status;
        return (
            <main>
                <div className="container my-5">                   
                    <div className="col">
                        <h1>Contact Us</h1>                    
                        <Form className="container" onSubmit={this.handleSubmit.bind(this)} method="POST">
                            <Row>  
                                <FormGroup className="col-12 col-lg-6">
                                    <Label for="name">Name:</Label>
                                    <Input type="name" name="name" id="name" placeholder="Name" />
                                </FormGroup>
                                <FormGroup className="col col-lg-6">
                                    <Label for="email">Email:</Label>
                                    <Input type="email" name="email" id="email" placeholder="Email" />
                                </FormGroup>
                            </Row>
                            <Row>
                                <FormGroup className="col">
                                    <Label for="message">Message:</Label>
                                    <Input 
                                        type="textarea" 
                                        name="message" 
                                        id="message" 
                                        placeholder="Message"
                                        style={{ height: 200 }}
                                    />
                                </FormGroup>
                            </Row>
                        </Form>
                    </div>
                </div>
            </main>
        )
    }
}

export default Contact;