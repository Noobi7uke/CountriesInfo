import React,{useState} from 'react';
import $ from 'jquery';
import './Detail.css'
import Country from '../Flag/Country';
import CovidTracker from '../CovidTracker/CovidTracker';
import Loading from '../Loading/Loading'
function Detail(props) {
    
    if (props.country === null)
        return (
            <div className="Details">
                <p>No country selected</p>
            </div>
        );
    else if (props.country.isFound == false)
        return (
            <div className="Details">
                <div className="Loader">
                    <Loading />
                </div>
                <div class="Loader">
                     <Loading />
                </div>
            </div>
        );
    else 
        return (
            <div className="Details">
                <div className="info">
                    <h2>{props.country.name}</h2>
                    <Country setCountry={props.setCountry} code={props.country.alpha3Code} />
                    <p>Neighbouring countries</p>
                    <div className="neighbouring">
                        {props.country.borders.map(code => <Country setCountry={props.setCountry}  code={code}/>)}
                    </div>
                </div>
                <div class="covid-tracker">
                    <h3>Covid Tracker</h3>
                    <CovidTracker key={props.country.alpha3Code + '_tracker'} countryCode={props.country.alpha3Code}/>
                </div>
            </div>
        );
}

export default Detail;