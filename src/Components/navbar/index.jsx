import React, { Component } from "react";
import './style.css'


class Navbar extends Component {
    state={
    }
    render() {
        return (
            <div className="navbar">
                <form className="inputs">
                    <input type="text"  placeholder="add" />
                    <input type="text"  placeholder="search" />
                </form>
            </div>
        )
    }
}


export default Navbar;