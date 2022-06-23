import React from "react";
import Navbar from "./components/Navbar/Navbar"
import About from "./components/About"
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
    return (
        <div>
            <Navbar />
            <About />
            <Projects />
            <Contact />
        </div>
    )
}