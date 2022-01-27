import React, { Component } from "react";
import { Link, animateScroll as scroll} from "react-scroll";

export default class Navbar extends Component {
    scrollToTop = () => {
        scroll.scrollToTop();
    };

    render() {
        return (
            <div className="nav" id="navbar">
                <Link to="about" smooth="true"> About </Link>
                <Link to="projects" smooth="true"> Projects </Link>
                <Link to="contact" smooth="true"> Contact </Link>
            </div>
        )
    }
}