import React, { useState } from 'react';
import $ from 'jquery';
import Loading from '../Loading/Loading';
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
                    {(covidData.cases || covidData.deaths || covidData.recovered || covidData.active) &&
                        <li>Total 
                            <ul>
                                {covidData.cases  && <li>Cases:  {covidData.cases} </li>}
                                {covidData.deaths && <li>Deaths: {covidData.deaths} </li>}
                                {covidData.recovered && <li>Recovered: {covidData.recovered} </li>}
                                {covidData.active && <li>Active Cases:  {covidData.active}</li>}
                            </ul>
                        </li>
                    }
                    {(covidData.todayCases || covidData.todayDeaths || covidData.todayRecovered) &&
                        <li>Today
                            <ul>
                                {covidData.todayCases && <li>Cases:  {covidData.todayCases}</li>}
                                {covidData.todayDeaths && <li>Deaths:  {covidData.todayDeaths}</li>}
                                {covidData.todayRecovered && <li>Recovered:  {covidData.todayRecovered}</li>}
                            </ul>
                    </li>}
                    {(covidData.casesPerOneMillion || covidData.deathsPerOneMillion || covidData.criticalPerOneMillion) &&
                        <li>Data per million
                            <ul>
                                {covidData.casesPerOneMillion && <li>Cases per Million:   {covidData.casesPerOneMillion}</li>}
                                {covidData.deathsPerOneMillion && <li>Deaths per Million:  {covidData.deathsPerOneMillion}</li>}
                                {covidData.criticalPerOneMillion && <li>Critical per Million:   {covidData.criticalPerOneMillion}</li>}
                            </ul>
                    </li>}
                    {covidData.oneTestPerPeople && <li>One test per {covidData.oneTestPerPeople} people.</li>}
                    {covidData.oneCasePerPeople && <li>One case per {covidData.oneCasePerPeople} people. </li>}
                    {covidData.oneDeathPerPeople && <li>One death per {covidData.oneDeathPerPeople} people.</li>}
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