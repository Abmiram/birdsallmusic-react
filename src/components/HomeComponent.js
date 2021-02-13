import React from 'react';
import {
    UncontrolledCarousel,
    Row
} from 'reactstrap';

const items = [
    {
        src: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80',
        altText: 'Slide 1',
        key: '1'
    },
    {
        src: 'https://images.unsplash.com/photo-1571327073757-71d13c24de30?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80',
        altText: 'Slide 2',
        key: '2'
    },
    {
        src: 'https://images.unsplash.com/photo-1475744214834-0cb9be6eb226?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80',
        altText: 'Slide 3',
        key: '3'
    }
];

const MusicCarousel = () => <UncontrolledCarousel items={items} />;

function Home(props) {
    return (
        <main>
            <div className="container mt-5">
                <Row className="pb-5">
                    <div className="col-lg-6">
                        <MusicCarousel />
                    </div>
                    <div className="col-lg-6 align-self-center pt-3 pt-lg-0">
                        <p>We are a family of experienced musicians offering digital music lessons, content, and resources.
                        </p>
                        <p>Our mission is to create an innovative digital music education platform to provide professional, positive,
                        individualized experiences for students of all ages and ability levels in an ever changing
                        world.
                        </p>
                        <p>We are proud to offer lessons and resources for violin, guitar, percussion,
                        music composition,
                        and theory.</p>
                    </div>
                </Row>
            </div>
        </main>
    )
}

export default Home;