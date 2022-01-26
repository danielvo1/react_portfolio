import React, { Component } from "react";
import { Link, animateScroll as scroll} from "react-scroll";

export default class Navbar extends Component {
    scrollToTop = () => {
        scroll.scrollToTop();
    };

    render() {
        return (
            <nav className="nav" id="navbar">
                
            </nav>
        )
    }
}