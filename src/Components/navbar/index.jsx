import React, { Component } from "react";
import './style.css'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            AddUserText: '',
            SearchText: '',
        }
    }
    render() {
        let AddUserFunc = (e) => {
            if (this.state.AddUserText.length) {
                if (e.key === 'Enter') {
                    this.props.AddUser(this.state.AddUserText);
                    this.setState({ AddUserText: '' })
                }
            }
        }
        return (
            <div className="navbar">
                <div className="inputs">
                    <input type="text" value={this.state.AddUserText} onKeyDown={AddUserFunc} onChange={(e) => this.setState({ AddUserText: e.target.value })} placeholder="add" />
                    <input onChange={(e) => this.props.SearchName(e.target.value)} type="text" placeholder="search" />
                </div>
            </div>
        )
    }
}


export default Navbar;