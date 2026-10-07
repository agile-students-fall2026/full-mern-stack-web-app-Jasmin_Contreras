import {useEffect, useState } from 'react'

const About = props => {
    const [about, setAbout] = useState(null)

    useEffect(() => {
        fetch('http://localhost:5002/about')
            .then(response => response.json())
            .then(data => setAbout(data))
    }, [])
    if (about === null) {
        return <p>Processing...</p>
    }
     return (
        <>
        <h1>About Us</h1>

        <h2>{about.name}</h2>

        {about.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
        ))}

        <img src={about.image} alt={about.name} />
        </>
     )

    }
    export default About