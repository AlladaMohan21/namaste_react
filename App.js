import React from "react";
import ReactDOM from "react-dom/client";

const parent = [
  React.createElement("div", { key: "1", id: "parent1" },
    React.createElement("div", { id: "child1" }, [
      React.createElement("h1", {}, "I am a h1 tag"),
      React.createElement("h2", {}, "I am a h2 tag")
    ])
  ),
  React.createElement("div", { key: "2", id: "parent2" },
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "I am a h1 tag"),
      React.createElement("h2", {}, "I am a h2 tag")
    ])
  )
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
