import React, { Component } from 'react'
import { connect } from 'react-redux';
import { login } from '../actions/login'

class loginForm extends Component {

    state = {
        email: '',
        password: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.login(this.state)

    }

    render() {
        return (
            <>
            <div class="card-title">
                Log In
            </div>
            <div class="card-body text-center">
                <form onSubmit={this.handleSubmit}>
                <div class="form-group">
                    <label for="username">Email:</label><br />
                    <input type="email" name="email" value={this.state.email} onChange={this.handleChange}></input>
                </div>
                <div class="form-group">
                    <label for="password">Password:</label><br />
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
                </div>
                <input type="submit" class="btn btn-primary"></input>
                </form>
            </div>
            </>
        )
        }
}

export default connect(null, {login})(loginForm)