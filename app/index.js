import React from "react";
import ReactDOM from "react-dom";
import List from "./list";
import Add from "./add";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    addItem(currentItem) {
        this.setState(prevState => {
            return {
                data: [...prevState.data, currentItem]
            }
        });
    }

    render() {
        return (
            <React.Fragment>
                <Add add={this.addItem.bind(this)}/>
                <List data={this.state.data}/>
            </React.Fragment>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("app-container"));



