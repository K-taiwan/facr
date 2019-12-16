import React from 'react';
import './NotFound.css';

const NotFound = (props) => {
    return (
        <div id="not-found">
            <button onClick={props.history.goBack}>Go Back</button>
            <img src="https://media.giphy.com/media/VwoJkTfZAUBSU/giphy.gif" alt="404"/>
        </div>
    )
}

export default NotFound;
