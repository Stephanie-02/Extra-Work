import React from "react";

export default class MyForm extends React.Component {
    state = {
        username: '',
        password: '',
        remember: false
    }

    handleInputChange = (event) => {
        const value = event.target.value
        const name = event.target.name
        const type = event.target.type
        const checked = event.target.checked

        this.setState({
            [name]: type === 'checkbox' ? checked : value,
        })
    }

    handleCheckboxChange = (event) => {
        const name = event.target.name
        const checked = event.target.checked

        this.setState({
            [name]: checked
        })
    }

    handleResetState = () =>{
        this.setState({
            username: '',
            pasword: '',
            remember: false
        })
    }

    handlePrefillForm = () => {
        this.setState({
            username: 'Jimmy',
            password: 'hello123',
            remember: true
        })
    }

    componentDidUpdate() {
        console.log(this.state);
    }

    render() {
        return (
          <div>
            <div>
                <button onClick={this.handleResetState}>Reset</button>
                <button onClick={this.handlePrefillForm}>Prefill Form</button>
            </div>
            <div>
                <input name="username" value={this.state.username} onChange={this.  handleInputChange}/>
                <input name="password" type="password" value={this.state.password}   onChange={this.handleInputChange}/>
                <input name="remember" type="checkbox" checked={this.state.remember} onChange={this.handleCheckboxChange}/>
            </div>
          </div>
        )
    }
}