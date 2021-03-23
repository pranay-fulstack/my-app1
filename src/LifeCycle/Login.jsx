import React, { Component } from 'react';

class Login extends Component {
componentDidMount(){
    console.log("componentDidMount Executing")
}
componentWillUnmount(){
    console.log("componentWillUnMount Executing")
}

    render() {
        return (
            <div>
                <h1>hello pranay</h1>
            </div>
        )
    }
}

export default Login;
