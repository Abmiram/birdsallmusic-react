import React from 'react';
import { Card, Button, CardBody, CardImg, CardFooter, CardHeader, CardTitle, } from 'reactstrap';

function RenderMusicCard({ piece }) {
    return (
        <Card className="music-card col-12 col-md-10 col-lg-5 card text-center mx-auto my-3">
            <CardHeader>
            <CardImg src={piece.imgUrl} alt={piece.name} className='music-img' />
                <CardTitle>
                    <h3>{piece.name}</h3>
                </CardTitle>
                <audio controls src={piece.audioUrl} />
            </CardHeader>
            <CardBody>
                <p>Arranged by Ross Birdsall</p>
                {piece.description.map(paragraph => <p>{paragraph}</p>)}
            </CardBody>
            <CardFooter>
                <Button color="primary" href={piece.purchaseUrl} target='_blank'>Purchase</Button>
            </CardFooter>
        </Card>
    )
}

function Music(props) {

    const musicDeck = props.music.map(piece => {
        return (
            <RenderMusicCard key={piece.id} piece={piece} />
        )
    })

    return (
        <main>
            <div className="container">
                <h1 className='text-center'>Music</h1>
                <div className='row'>
                    {musicDeck}
                </div>
            </div>
        </main>
    )
}

export default Music;