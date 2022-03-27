//https://medium.com/technofunnel/working-with-react-pure-components-166ded26ae48

import React from "react";
//React.PureComponent is exactly the same as React.
//Component except that it handles the shouldComponentUpdate() method for you. 
//When props or state changes, PureComponent will do a shallow comparison on both props and state. 
//Component on the other hand won't compare current props and state to next out of the box. 
//Thus, the component will re-render by default whenever shouldComponentUpdate is called.

//Pure functions are deterministic - for specific input parameters, we always have a specific output

class ImpureComponent extends React.PureComponent {
    //class ImpureComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = { counter: 0 }
        setInterval(() => {
            this.setState({ counter: 0 })
        }, 5000);
    }

    render() {
        return <b>
            {console.log("re-rendering")}
            Counter Value: {this.state.counter}</b>
    }
}

export default ImpureComponent;