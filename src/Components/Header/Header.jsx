import React from 'react';
import SearchBar from './Searchbar/Searchbar';
import './Header.css';

function Header(props) {
    return (
        <div className="Header">
            <SearchBar onSearch={props.onSearch} />
        </div>
    );
}

export default Header;