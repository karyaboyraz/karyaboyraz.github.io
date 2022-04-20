import React, { Component } from "react";
import "./Card.css";

export default class Card extends Component {
  render() {
    const { country, weather, celcius, city , img , kelvin , fahrenheit} = this.props.info;
    let myStyle = {
      backgroundImage: img,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "570px",
    };
    
    return (
      <div>
        <div className="weather-card mt-5 mx-auto bg-light overflow-hidden position-relative">
          <div style={myStyle} className="top text-center p-4">
            <h1 className="heading mt-3 text-light">{weather}</h1>
            <h3 className="location mt-3 text-light">
              {country}, {city}
            </h3>
            <p className="temp mt-3 text-light tempTypeTop">
              <span>{celcius}</span>
              <sup>o</sup>C
            </p>
          </div>
          <div className="px-5 bg-light mt-4">
            <ul className="m-0 p-0 pt-4 overflow-hidden">
              <li className="text-dark d-flex justify-content-between">
                <span>Fahrenheit</span>
                <span>
                  <span className="lnr lnr-sun"></span>
                  <span className="m-2">{fahrenheit}</span>
                  <sup>o</sup>F
                </span>
              </li>
              <li className="d-flex justify-content-between mt-1">
                <span>Kelvin</span>
                <span>
                  <span className="lnr lnr-cloud"></span>
                  <span className="m-3">{kelvin}</span>
                  <span>K</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
