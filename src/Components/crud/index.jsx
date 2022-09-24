import React, { Component } from "react";
import './style.css'
import User from "./user";
import UsersData from "../../Mock/users";

class Crud extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: UsersData
        }
    }
    render() {
        let deleteUser = (id) => {
            // this.state.data.filter({data: (value)=>value.id!==1})
            let res = UsersData.filter((value, index) => value.id)
            // this.setState({ data: res })
        }
        return (
            <div className="crud">
                <div className="crud-main">
                    <div className="usertitle">
                        <div className="id-title">№</div>
                        <div className="name-title">Name</div>
                        <div className="controls-title">Controls</div>
                    </div>
                    {
                        UsersData.map((value)=>{
                        //   return <User key={value.id} UsersData={this.state.data} id={value.id} name={value.name} deleteUser={deleteUser}></User>
                            <div className="user">
                                <div className="userid">
                                    {value.id}
                                </div>
                                <div className="username">
                                    {value.name}
                                </div>
                                <div className="user-controls">
                                    <button onClick={() => deleteUser()}>
                                        Delete
                                    </button>
                                    <button>
                                        Edit
                                    </button>
                                </div>
                            </div>
                    })
                    }
                    
                </div>
            </div>
        )
    }
}


export default Crud;