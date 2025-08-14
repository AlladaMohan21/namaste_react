import User from "./user";
import UserClass from "./userClass";

const About =()=>{
    return (
        <div>
            <h1>THis is about us page...</h1>
            <User name={"mohan"} location={"jeypore.."}></User>
            <UserClass name={"yuvii"} location={"Koraput.."}></UserClass>
        </div>
    )
}

export default About;