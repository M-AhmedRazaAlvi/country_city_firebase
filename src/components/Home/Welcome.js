import React, { useState, useEffect } from "react";
import axios from "axios";
import welcome from "./welcome.css";
import { Link } from "react-router-dom";
function Welcome(props) {
  const [data, setdata] = useState([]);
  const [getcountry, setCountry] = useState();
  const [getStates, setStates] = useState([]);
  const [selectState, setSelectState] = useState();
  const [cities, setCities] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json"
      )
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err));
  });
  ////////////// get country in which data//////////
  const country = [...new Set(data.map((item) => item.country))];
  country.sort();

  //////////     set state in which counrty ////////////
  const handleCounrty = (e) => {
    let states = data.filter((state) => state.country === e.target.value);
    states = [...new Set(states.map((item) => item.subcountry))];
    states.sort();
    setStates(states);
  };

  //////////     set city in which state ////////////

  const handleState = (e) => {
    let cities = data.filter((city) => city.subcountry === e.target.value);
    cities.sort();
    setCities(cities);
  };
  return (
    <>
      <div className="welContainer">
        <div>
          <h2 className="hclass">{`Welcome - ${props.name}`}</h2>
        </div>
        <div className="newCountry">
          <div className="welCountry">
            <label>Country :</label>
            <select onChange={(e) => handleCounrty(e)}>
              <option value="">--Select country--</option>
              {country.map((items) => (
                <option key={items} value={getcountry}>
                  {items}
                </option>
              ))}
            </select>
          </div>
          <div className="welCountry">
            <label>State :</label>
            <select onChange={(e) => handleState(e)}>
              <option value="">--Select state--</option>
              {getStates.map((items) => (
                <option key={items} value={selectState}>
                  {items}
                </option>
              ))}
            </select>
          </div>
          <div className="welCountry">
            <label>City :</label>
            <select>
              <option value="">--Select city--</option>
              {cities.map((items) => (
                <option key={items.name}>{items.name}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="next">
        <Link to="/search">Next</Link>
        
        </div>
      </div>
    </>
  );
}

export default Welcome;
