import React, { useState } from 'react';
import $ from 'jquery';
import Loading from './Loading/Loading';
import './CovidTracker.css';

function CovidTracker(props) {
    const [covidData, setData] = useState({ executed: false });
    if (covidData.executed === false) {
        $.ajax({
            url: `https://disease.sh/v2/countries/${props.countryCode}?yesterday=true&allowNull=true`,
            method: 'GET'
        }).done(data => {
            console.log("DONE");
            setData({ ...data, executed: true, isPresent: true });
        }).fail((jqXHR, status, err) => {
            console.log("ERROR");
            setData({ executed: true, isPresent: false });
        });
    }
    
    if (covidData.executed && covidData.isPresent) {
        return (
            <div>
                <ul>
                    <li>Total </li>
                    <ul>
                        <li>Cases:  {covidData.cases} </li>
                        <li>Deaths: {covidData.deaths} </li>
                        <li>Recovered: {covidData.recovered} </li>
                        <li>Active Cases:  {covidData.active}</li>
                    </ul>
                    <li>Today</li>
                    <ul>
                        <li>Cases:  {covidData.todayCases}</li>
                        <li>Deaths:  {covidData.todayDeaths}</li>
                        <li>Recovered:  {covidData.todayRecovered}</li>
                    </ul>
                    <li>Data per million</li>
                    <ul>
                        <li>Cases per Million:   {covidData.casesPerOneMillion}</li>
                        <li>Deaths per Million:  {covidData.deathsPerOneMillion}</li>
                        <li>Critical per Million:   {covidData.criticalPerOneMillion}</li>
                    </ul>
                    <li>One test per {covidData.oneTestPerPeople} people.</li>
                    <li>One case per {covidData.oneCasePerPeople} people. </li>
                    <li>One death per {covidData.oneDeathPerPeople} people.</li>
                </ul>                
            </div>
        )
    } else if (covidData.executed) {
        return (
            <div>
                <p>No data present</p>
            </div>
        );
    } else {
        return (
            <div className="loader">
                <Loading />
            </div>
        );
    }
}

export default CovidTracker;