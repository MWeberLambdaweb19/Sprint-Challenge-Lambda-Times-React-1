import React from 'react';

const withAuthorize = Content => Login => 
    class extends React.Component {
        constructor(){
            super();
            this.state= {
                loggedOn: false
            }
        }

        componentDidMount(){
            if(!localStorage.getItem(`user`)){
                this.setState({loggedOn: false})
            } else {
                this.setState({loggedOn: true})
            }
        }
    
        render(){
        return(
        <div>
        {this.state.loggedOn ? <Content/> : <Login />}
        </div>
        )
    }    
}
export default withAuthorize;