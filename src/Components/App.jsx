import React, { useState } from 'react';
import $ from 'jquery';
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import List from './List/List';
import Detail from './Detail/Detail';


function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState(null);

  if (countries.length == 0) {
    $.ajax({
      url: "https://restcountries.eu/rest/v2/all?fields=name;alpha3Code;flag",
      method: "GET",
    }).then(function (data) {
        console.log(data);
        setCountries(data);
      });
  }
  return (
    <div className="App">
      <Header onSearch={setCountries} />
      <List countries={countries} setCountry={setCountry} />
      <Detail country={country} setCountry={setCountry} />
      <Footer />
    </div>
  );
}

export default App;
