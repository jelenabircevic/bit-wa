import React from 'react';

const Header = props => {
    return (
        <header className = "nav">
            <h1>{props.title}</h1>
        </header>
    )
}

export default Header;