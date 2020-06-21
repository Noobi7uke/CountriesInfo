import React, { useState } from 'react';
import $ from 'jquery';
import './Searchbar.css';

function SearchBar(props) {
    const [inputText, setText] = useState('');
    
    function handleChange(event) {
        const inTxt = event.target.value.toLowerCase();
        setText(inTxt);
        console.log(inTxt);
    }
    function handleClick(event) {
        event.preventDefault();    
        $.ajax({
            url: `https://restcountries.eu/rest/v2/name/${inputText}?name;alpha2Code;flag`,
            method: "GET"
        }).then(function (data) {
            console.log(data);
            props.onSearch(data);
        }).fail(function (jqXHR, status, err) {
            setText("");
        });
    }
    function handleEnter(event) {
        const element = event.target;
        element.classList.toggle("search-btn-on");
    }
    function handleLeave(event) {
        const element = event.target;
        // element.classList.toggle("search-btn-off");
        element.classList.toggle("search-btn-on");
    }
    return (
        <div className="SearchBar">
            <input className="input-bar" type="text" onChange={handleChange} placeholder="Enter country" value={inputText} />
            <button type="submit" className="search-btn" onClick={handleClick} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>Search</button>
        </div>
    )
}

export default SearchBar;