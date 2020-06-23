import React from 'react';
import $ from 'jquery';
import './Country.css';

function Country(props) {
    function handleClick(event) {
        props.setCountry({ isFound: false });
        $.ajax({
            url: `https://restcountries.eu/rest/v2/alpha/${props.code}`,
            method: 'GET'
        }).done(data => {
            props.setCountry({ ...data, isFound: true });
        });
    }
    return (
        <div className="flag">
            <img className="flag-img" src={`https://restcountries.eu/data/${props.code.toLowerCase()}.svg`} alt="" onClick={handleClick} />
        </div>
    );
}

export default Country;