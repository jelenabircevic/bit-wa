import React from 'react';

const Header = props => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#!" className="brand-logo center">{props.title}</a>
                <ul className="right hide-on-med-and-down">
                    <li><a href="collapsible.html"><i className="material-icons">refresh</i></a></li>
                    <li><a href="badges.html"><i className="material-icons">view_module</i></a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;