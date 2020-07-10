import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'


class Welcome extends Component {


    render() {
        return (
            <>
            {localStorage.token && <Redirect to="/channels/1" />}
            <div className="card w-50 mx-auto mt-5 border border-info">
                <div className="card-body text-center">
                    <h4>Welcome to #Channels</h4>
                    <p>Channels is a Slack-esque web application designed to let users communicate in real time. This site utilizes a React/Redux frontend, built on top of a Rails API backend. </p>
                    <Link to='/login' className="btn btn-info">Log In</Link> <Link to='/signup' className="btn btn-info">Sign Up</Link>
                </div>
            </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.loggedIn
    }
}

export default connect(mapStateToProps)(Welcome)