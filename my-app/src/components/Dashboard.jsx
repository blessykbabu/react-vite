import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

function Contact() {
    return <h1>This is contact page</h1>
}

function Features() {
    return <h1>This is Features page</h1>
}


function Dashboard() {
    // return <h1>This is home page</h1>


    return (
        <>
            <nav>
                <ul>
                    <li> <Link to="contact">Contact</Link> </li>
                    <li> <Link to="features">Features</Link></li>
                </ul>
            </nav>

            <Routes>
                <Route path="/contact" element={<Contact />} />
                <Route path="/features" element={<Features />} />
            </Routes>
        </>
    )
}

export default Dashboard;
