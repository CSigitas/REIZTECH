import React, { useRef } from "react";
import "./header.css";
import { Sorting } from "../functions";

interface HeaderProps {
  setSort(sort: Sorting): void;
  setInputCountry(inputCountry: string): void;
  setInputRegion(inputRegion: string): void;
}
const Header: React.FC<HeaderProps> = ({
  setSort,
  setInputCountry,
  setInputRegion,
}) => {
  const countryRef = useRef<HTMLInputElement>(null);
  const regionRef = useRef<HTMLInputElement>(null);
  return (
    <div className="header">
      <div>
        <h2>The Task</h2>
      </div>
      <div className="div-header-list">
        <button onClick={() => setSort(Sorting.Ascending)}>
          Sort ascending
        </button>
        <button onClick={() => setSort(Sorting.Descending)}>
          Sort descending
        </button>
      </div>
      <div className="header-buttons">
        <div>
          <label>Input Coutry Name</label>
          <br></br>
          <input type="text" name="country" ref={countryRef}></input>
          <br></br>
          <button
            onClick={() => {
              if (countryRef && countryRef.current) {
                setInputCountry(countryRef.current.value);
              }
            }}
          >
            OK
          </button>
        </div>
        <div>
          <label>Input Region Name</label>
          <br></br>
          <input type="text" name="region" ref={regionRef}></input>
          <br></br>
          <button
            onClick={() => {
              if (regionRef && regionRef.current) {
                setInputRegion(regionRef.current.value);
              }
            }}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
