import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Label, Row } from 'reactstrap';

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
        event.preventDefault();
        this.setState({ status: "Sending..." });
        fetch("https://birdsallmusic.net/send", {
            method: "POST",
            body: {
                name: this.state.name,
                email: this.state.email,
                message: this.state.message
            }
        }).then(response => {
            if (response.ok) {
                alert("Message Sent");
                this.setState({ name: "", email: "", message: "", status: "Submit" })
            } else {
                alert("Message Failed");
            }
        });
    };

    handleChange(event) {
        const field = event.target.id;
        if (field === "name") {
            this.setState({ name: event.target.value });
        } else if (field === "email") {
            this.setState({ email: event.target.value });
        } else if (field === "message") {
            this.setState({ message: event.target.value });
        }
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
                                    <Input 
                                        type="name" 
                                        name="name" 
                                        id="name" 
                                        placeholder="Name"
                                        value={this.state.name}
                                        onChange={this.handleChange.bind(this)}
                                        required
                                    />
                                </FormGroup>
                                <FormGroup className="col col-lg-6">
                                    <Label for="email">Email:</Label>
                                    <Input 
                                        type="email" 
                                        name="email" 
                                        id="email" 
                                        placeholder="Email"
                                        value={this.state.email}
                                        onChange={this.handleChange.bind(this)}
                                        required
                                    />
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
                                        value={this.state.message}
                                        onChange={this.handleChange.bind(this)}
                                        required
                                    />
                                </FormGroup>
                            </Row>
                            <Button color="success">{buttonText}</Button>
                        </Form>
                    </div>
                </div>
            </main>
        )
    }
}

export default Contact;