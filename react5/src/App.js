import "./App.css";
import Card from "./Card";
import Area from "./inputArea";
import Title from "./title.js";
import { Row, Col} from "reactstrap";

import React, { Component } from "react";

export default class App extends Component {
  

  render() {
    
    return (
      <div>
        <Title></Title>
        
        <Area></Area>
        
      </div>
    );
  }
}
