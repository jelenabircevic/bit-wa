import React from 'react';

const Footer = props => {
    return (
        <footer id="footer" className="page-footer">
          <div className="footer-copyright">
            <div className="container">
            © {props.copy}
            </div>
          </div>
        </footer>
    )
}

export default Footer;