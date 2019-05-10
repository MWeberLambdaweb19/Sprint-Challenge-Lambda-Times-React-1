import React from 'react';

class Login extends React.Component {
    constructor(){
        super();
        this.state = {
            user: "",
            pass: ""
        }
    }

    login = () => {
        localStorage.setItem('user', `${this.state.user}`);
        localStorage.setItem('pass', `${this.state.pass}`);
    }

    handleUser = (event) => {
        this.setState({user: event.target.value})
    }

    handlePass = (event) => {
        this.setState({pass: event.target.value})
    }

    render(){
    return(
    <div>
        <form onSubmit={this.login}>
            <input name="user" type="username" placeholder="username" onChange={this.handleUser}></input>
            <input name="pass" type="password" placeholder="password" onChange={this.handlePass}></input>
            <button type="submit">Login!</button>
        </form>
    </div>
    )
    }
}

export default Login;