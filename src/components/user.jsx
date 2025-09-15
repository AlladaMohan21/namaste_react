 import { useState } from "react";
 
 const User=({ name,location })=>{
    const [count]=useState(0);
        const [count2]=useState(2);

    return (
        <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
            <h1>Count ={count}</h1>
            <h1>Count ={count2}</h1>
            <h1>My name is {name}</h1>
            <h2>I am from {location}</h2>
            <h3>my email is @kjfkj</h3>
        </div>
    )
} 

export default User;