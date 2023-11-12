import React from "react";
import { useParams } from "react-router-dom";

function Contact() {
    return <h1>This is contact page</h1>;
}

function Features() {
    return <h1>This is features page</h1>
}

function About () {
    let {name} = useParams();
    return <h1>This is about {name}</h1>
}

export default About;