import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./Components/Card";
// import "./index.css";

const root = document.querySelector("#root");

// const paragraf = React.createElement('p', {children: 'layout'})
// const p = <p>Haha</p>
// const div =<div data-id='tartar'>{p}</div>;

const newRoot = ReactDOM.createRoot(root);
newRoot.render(<React.StrictMode>
  <Card/>
</React.StrictMode>);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<React.StrictMode></React.StrictMode>);
