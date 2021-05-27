import React, { Component } from 'react';
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap';

class StudentLogin extends Component {
    render() {
        return (
            <main className="container login-form fullPage">
                <Card className="my-5">
                    <CardHeader className="header">
                        <CardTitle>
                            <h2>Student Resources</h2>
                        </CardTitle>
                    </CardHeader>
                    <CardBody>
                        <p>Please log in to view student resources.</p>
                    </CardBody>
                </Card>
            </main>
        )
    }
};


export default StudentLogin;