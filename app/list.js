import React from "react"
import Item from "./item"

function List(){
    let todos = [{
        title: "This is a test title"
    },
    {
        title: "This is a test title"
    }]

    let ls = todos.map(() => {
        return <Item/>
    });

    return (<div>{ls}</div>);
}

export default List;