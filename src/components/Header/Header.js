import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import './Header.css';

const handleUserValidation = (props) => {
    if (props.user) return props.history.push(`/profile/${props.user.username}`);
    return props.history.push("/404");
}

const Header = (props) => {
    return(
        <header id="app-header">
            <h1>Facr</h1>
            <h4>A Social Place For Devs!</h4>
            <nav>
                <ul>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                        <li onClick={()=>handleUserValidation(props)}>Profile</li>
                </ul>
            </nav>
        </header>
    );
};

export default withRouter(Header);