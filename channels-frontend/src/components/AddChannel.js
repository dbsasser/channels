import React from 'react'
import { Link } from 'react-router-dom';


const AddChannel = ({handleJoinChannel}) => {
    
    return (
        <div className="card mx-auto w-50 mt-3">
            <div className="card-body text-center">
                <h5>Like what you see?</h5>
                <h6>Join this channel to participate in the conversation.</h6>
                <button onClick={handleJoinChannel} className="btn btn-primary">Join</button>
            </div>
        </div>
    )
}

export default AddChannel