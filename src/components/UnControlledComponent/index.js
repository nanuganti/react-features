//When a child component needs to reference its parent component’s current node, 
//the parent component needs a way to send down its ref to the child. The technique is called ref forwarding.
import React from "react";
class UnControlledComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: "hello" };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.myInputTextRef = React.createRef();
    }
    handleSubmit(event) {
        this.myInputTextRef.current.focus();
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <p>This is UnControlledComponent example</p>
                <br />
                <label>Name: </label>
                <input type="text" ref={this.myInputTextRef}></input>
                <input type="submit" value="submit" />
            </form>
        )
    }
}

export default UnControlledComponent;