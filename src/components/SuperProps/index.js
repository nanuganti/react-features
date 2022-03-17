import React from "react";

//It is used to call the constructor of its parent class. 
//This is required when we need to access some variables of its parent class.
class SuperProps extends React.Component {
    constructor(props) {

        super(props)
        console.log(this.props)
        // super()
        // console.log(this.props) // Undefined 
        // console.log(props)     // Defined Props Will Be Logged 
    }

    render() {
        return <div>SuperProps {this.props.message}</div>;
    }
}
export default SuperProps;