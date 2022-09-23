import React, { Component } from "react";
import Navbar from "../../Components/navbar";
import Crud from "../../Components/crud";
class MainPage extends Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <Crud></Crud>
            </div>
        )
    }
}


export default MainPage;