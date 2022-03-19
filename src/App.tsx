import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import CountryComponents from "./components/CountryComponents";
import { Sorting, sorting, findCountryByField } from "./functions";
import "./App.css";
import { Country } from "./types";
interface appProps {
  fetchAllCountries(): Promise<Country[]>;
}
const App: React.FC<appProps> = ({ fetchAllCountries }) => {
  const [countries, setcountries] = useState<Country[]>([]);
  const [inputCountry, setInputCountry] = useState("");
  const [inputRegion, setInputRegion] = useState("");
  const [sort, setSort] = useState(Sorting.None);
  useEffect(() => {
    fetchAllCountries().then((data) => setcountries(data));
  }, [fetchAllCountries]);

  function filterByName(filterCountries: Country[]) {
    const findCountry = findCountryByField(
      filterCountries,
      inputCountry,
      "name"
    );
    console.log(filterCountries, findCountry);
    if (findCountry.length !== 0) {
      console.log(findCountry + "labas");
      return filterCountries.filter(
        (countryObject) => countryObject.area < findCountry[0].area
      );
    }
    return filterCountries;
  }
  function filterByRegion(filterCountries: Country[]) {
    const findCountry = findCountryByField(
      filterCountries,
      inputRegion,
      "region"
    );
    if (findCountry.length !== 0) {
      return filterCountries.filter(
        (countryObject) => countryObject.region === findCountry[0].region
      );
    }
    return filterCountries;
  }

  function filter() {
    let filterCountries = sorting(countries, sort);
    filterCountries = filterByName(filterCountries);
    filterCountries = filterByRegion(filterCountries);
    return filterCountries;
  }
  return (
    <div>
      <Header
        setSort={setSort}
        setInputCountry={setInputCountry}
        setInputRegion={setInputRegion}
      />
      <div className="countries-list">
        {countries &&
          filter().map((country, index) => (
            <CountryComponents key={index} country={country} index={index} />
          ))}
      </div>
    </div>
  );
};

export default App;
