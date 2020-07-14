import React, { Component } from 'react'
import { connect } from 'react-redux';
import { login } from '../actions/userActions'

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

    componentDidUpdate(){
        if('id' in this.props.user){
            this.props.history.push("/channels/1")
        }
    }
    

    render() {
        return (
            <>
            <div className="card w-50 mx-auto mt-5 border border-info">
                <div class="card-header">
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
                    <input type="submit" class="btn btn-info"></input>
                    </form>
                </div>
            </div>
            </>
        )
        }
}

const mapDisptachToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapDisptachToProps, {login})(loginForm)