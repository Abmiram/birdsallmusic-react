import React from 'react';

function RenderBio({ bio }) {
    return (
        <div className="container-fluid">
            <div className="row">
                <img src={bio.url} className="img-fluid d-block" />
            </div>
            <div className="row">
                <div className="col-xl-6 bio-text">
                    <h2 className="mt-3 text-center">{bio.name}</h2>
                    {bio.bio.map(paragraph => <p>{paragraph}</p>)}
                </div>
            </div>
        </div>
    )
};

function About(props) {

    const rollcall = props.bios.map((bio) => {
        return (
            <section 
                key={bio.id} 
                id={bio.cssId} 
                className="bio-image"
                style={{ backgroundImage: `url(${bio.url})`}}    
            >
                <RenderBio bio={bio} />
            </section>
        )
    })

    return (
        <main>
            {rollcall}
        </main>
    );
};

export default About;