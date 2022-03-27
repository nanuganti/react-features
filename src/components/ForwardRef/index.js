//https://blog.logrocket.com/cleaning-up-the-dom-with-forwardref-in-react/
import React from "react";

const InputText = React.forwardRef((props, ref) => (
    <input ref={ref} {...props} />
));

class ForwardRef extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: "some text" };
        this.myForwardRef = React.createRef();
        this.handleFocus = this.handleFocus.bind(this);
    }
    handleFocus() {
        this.myForwardRef.current.focus();
        this.myForwardRef.current.value = "sample forward ref text";
    }

    render() {
        return (
            <div>
                <p>This is Example of ForwardRef</p>
                <InputText ref={this.myForwardRef} />
                <button onClick={this.handleFocus}>Focus</button>
            </div>
        )
    }
}

export default ForwardRef;