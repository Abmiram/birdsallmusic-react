import React from 'react';

const spaceBio = bio => {
    if (bio.cssId === 'claudia' || bio.cssId === 'ross') {
        return <div className="col-xl-6" />;
    } else {
        return;
    }
}

function RenderBio({ bio }) {
    return (
        <div className="container-fluid">
            <div className="row d-xl-none">
                <img src={bio.url} className="img-fluid d-block" />
            </div>
            <div className="row">
                {spaceBio(bio)}
                <div className="col-xl-6 bio-text">
                    <h2 className="my-4 text-center">{bio.name}</h2>
                    {bio.bio.map(paragraph => <p>{paragraph}</p>)}
                </div>
            </div>
        </div>
    )
};

function About(props) {

    const rollcall = props.bios.map(bio => {
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