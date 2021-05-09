import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Form, FormGroup, Input, Label } from 'reactstrap';

class LinkForm extends Component {
    render() {
        return (
            <div className="container login-form">
                <Card className="my-5">
                    <CardHeader className="header">
                        <CardTitle>
                            <h2>Admin Link Submission</h2>
                        </CardTitle>
                    </CardHeader>
                    <CardBody>
                        <Form className="container" onSubmit={this.handleSubmit.bind(this)} method="POST">
                            <FormGroup>
                                <Label for="title">Title</Label>
                                <Input type="text" name="title" id="title" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="url">URL</Label>
                                <Input type="text" name="url" id="url" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="category">Category</Label>
                                <Input type="select" name="category" id="category">
                                    <option>Violin</option>
                                    <option>Guitar</option>
                                </Input>
                            </FormGroup>
                            <Button color="success">Submit</Button>
                        </Form>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default LinkForm;