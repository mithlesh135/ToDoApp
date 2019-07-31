import React from "react";
import ReactDOM from "react-dom";
import List from "./list";
import Add from "./add";

function App() {
    return (<div><div><Add/></div><div><List/></div></div>);
}

ReactDOM.render(<App/>, document.getElementById("app-container"));



