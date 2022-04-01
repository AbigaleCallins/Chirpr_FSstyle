import React from 'react';
import { className } from 'react-bootstrap'

const ChirpCard = ({ username, content, _created }) => {
    return (

        <span className="card row-3">
            <div className="card-header">
                {username}
            </div>
            <div className="card-body">
                <h5 className="card-title">{content}</h5>
                <footer className="blockquote-footer">{_created}</footer>
            </div>
        </span>
    )
}

export default ChirpCard;