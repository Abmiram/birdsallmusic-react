import React, { Component } from 'react';
import { Card, CardHeader, CardTitle, CardBody, Form, FormGroup, Input, Label, Button } from 'reactstrap';

class StudentLogin extends Component {
    constructor(props) {
        super(props)

        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(event) {
        if(this.username.value === "Student" && this.password.value === "Suzuki") {
            this.props.updateStudentStatus();
        } else {
            alert('An incorrect username or password was entered.')
        }
        event.preventDefault();
    }

    render() {
        return (
            <main className="container login-form">
                <Card className="my-5">
                    <CardHeader className="header">
                        <CardTitle>
                            <h2>Student Login</h2>
                        </CardTitle>
                    </CardHeader>
                    <CardBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username:</Label>
                                <Input type="text" id="username" name="username" innerRef={input => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password:</Label>
                                <Input type="password" id="password" name="password" innerRef={input => this.password = input} />
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </CardBody>
                </Card>
            </main>
        )
    }
}


export default StudentLogin;