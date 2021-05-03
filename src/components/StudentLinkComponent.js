import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

function RenderAccordionTab({ linkObject }) {
    return (
        <Card className="hoverPointer">
            <Accordion.Toggle as={Card.Header} eventKey={linkObject.id} className='header'>
                <h4>{linkObject.groupName}</h4>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={linkObject.id}>
                <Card.Body>
                    <ul>
                        {linkObject.linkList.map(link => <li><a href={link.url} target="_blank" rel="noreferrer">{link.name}</a></li>)}
                    </ul>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    )
}

function StudentLinks(props) {

    const accordionCards = props.links.map(linkObject => {
        return (
            <RenderAccordionTab key={linkObject.id} linkObject={linkObject} />
        )
    })

    return (
        <main className="container my-5">
            <div className="row">
                <Accordion className="link-accordion">
                    {accordionCards}
                </Accordion>
            </div>
        </main>
    )
}

export default StudentLinks;