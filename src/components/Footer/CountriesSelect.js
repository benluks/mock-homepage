import React from "react";
import { Countries } from "./CountryList";

function CountriesSelect() {
  return (
    <div>
      <select defaultValue="United States">
        {Countries.map((option, index) => {
          return (
            <option id={index} key={index}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default CountriesSelect;
