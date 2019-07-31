import React from "react"
import Api from "./api"

function Item(){
    Api.post({
        title: "This is a new service"
    })

    let posts = Api.getAll();

    return (<li><span>{posts[0].id}</span><span>{posts[0].title}</span></li>);
}

export default Item;