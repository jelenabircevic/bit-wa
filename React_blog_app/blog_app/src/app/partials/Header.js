import React from 'react';

const Header = props => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#!" className="brand-logo center">{props.title}</a>
                <ul className="right hide-on-med-and-down">
                    <li><a><i className="material-icons">refresh</i></a></li>
                    <li onClick={props.changeView}><a><i className="material-icons">{props.viewButton}</i></a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;