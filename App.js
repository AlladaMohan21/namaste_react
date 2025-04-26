import React from "react";
import ReactDOM from "react-dom/client";

const Head=()=>(<h1 id="heading" className="header">This is a code by jsx in java script </h1>);
const HeaderComponent=()=>(
<div id="container">
    <Head />
    <h1>Header by component composition</h1>
 </div>
);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);