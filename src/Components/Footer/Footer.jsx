import React from 'react';
import './Footer.css';


function Footer() {
    return (
        <div className="Footer">
            <p>Copyright © {new Date().getFullYear()}</p>
        </div>
    )
}

export default Footer;