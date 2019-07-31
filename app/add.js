import React from "react";

function Add({add}) {

    let currentValue = "";

    function onSubmit(event) {
        event.preventDefault();

        add(currentValue);
        currentValue = "";
    }

    function onChange(event) {
        currentValue = event.target.value;
    }

    return (
        <form onSubmit={onSubmit}>
            <input onChange={onChange} type="text"></input>
            <input type="submit" value="Add"/>
        </form>
    );
}

export default Add;