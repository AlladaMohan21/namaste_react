import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props)
       this.state={
        userInfo:{
            name:"Dummy Mohan",
            id:"Dummy id"
        }
       }


    }
    async componentDidMount(){
        const data=await fetch("https://api.github.com/users/AlladaMohan21");
        const json=await data.json();

        this.setState({
            userInfo:json,
        })
    }

  
    render(){
        const{name,id}=this.state.userInfo;
        return (
        <div className="user-class">
            <h1>My name is {name}</h1>
            <h2>I login id {id}</h2>
            <h3>my email is @kjfkj</h3>
        </div>
    )
    }
}
export default UserClass;