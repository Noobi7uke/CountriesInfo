import React from 'react';
import Country from '../Flag/Country';
import './List.css';

function List(props) {
    return (
        <div className="List">
            {props.countries.map(country => <Country name={country.name} code={country.alpha3Code} key={country.alpha3Code} setCountry={props.setCountry} />)}
        </div>
    );
}

export default List;