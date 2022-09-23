import React, { Component } from "react";

class User extends Component {
    render() {
        return (
            <div className="mainuser">
                <div className="user">
                    <div className="userid">
                        {this.props.id}
                    </div>
                    <div className="username">
                        {this.props.name}
                    </div>
                    <div className="user-controls">
                        <button onClick={this.props.deleteUser}>
                            Delete
                        </button>
                        <button>
                            Edit
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}


export default User;