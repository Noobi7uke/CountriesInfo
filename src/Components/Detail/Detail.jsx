import React,{useState} from 'react';
import $ from 'jquery';
import './Detail.css'
import Country from '../Flag/Country';

function Detail(props) {
    
    if (props.country === null)
        return (
            <div className="Details">
                <p>No country selected</p>
            </div>
        );
    else
        return (
            <div className="Details">
                <h2>{props.country.name}</h2>
                <Country setCountry={props.setCountry} code={props.country.alpha3Code} />
                <p>Neighbouring countries</p>
                <div className="neighbouring">
                    {props.country.borders.map(code => <Country setCountry={props.setCountry}  code={code}/>)}
                </div>
            </div>
        );
}

export default Detail;