import React from "react"
import Item from "./item"

function List({data: todos}){
    return todos.map((itemData, index) => {
        return <Item data={itemData} key={index}/>
    });
}

export default List;