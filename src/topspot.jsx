import React from 'react';

export default props => (
    <div className = "row mb-3">
        <div className = "col-md-3"></div>
        <div className = "col-md-6">
        <div className = "col-md-3"></div>
            <div className = "well border border-secondary p-3">
                <h4>{props.name}</h4>
                <p>{props.description}</p>
                <a href = {`https://maps.google.com/?q=${props.location[0]},${props.location[1]}`} className="btn btn-secondary btn-sm">Direction</a>
            </div>
        </div>
    </div>
)
