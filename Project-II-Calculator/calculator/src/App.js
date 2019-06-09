import React from 'react';
import './App.css';

import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ActionButton from "./components/ButtonComponents/ActionButton";
import NumberButton from "./components/ButtonComponents/NumberButton";


const App = () => {
  return (
    <div className="calculator">
      <CalculatorDisplay />
      <div className="buttonSection">
        <ActionButton text="clear" buttonStyle="actionButton" />
        <NumberButton text="&divide;" buttonStyle="operatorButton" />
        <NumberButton text="7" buttonStyle="numberButton" />
        <NumberButton text="8" buttonStyle="numberButton" />
        <NumberButton text="9" buttonStyle="numberButton"/>
        <NumberButton text="&times;" buttonStyle="operatorButton" />
        <NumberButton text="4" buttonStyle="numberButton" />
        <NumberButton text="5" buttonStyle="numberButton" />
        <NumberButton text="6" buttonStyle="numberButton" />
        <NumberButton text="&minus;" buttonStyle="operatorButton" />
        <NumberButton text="1" buttonStyle="numberButton" />
        <NumberButton text="2" buttonStyle="numberButton" />
        <NumberButton text="3" buttonStyle="numberButton" />
        <NumberButton text="&#43;" buttonStyle="operatorButton" />
        <ActionButton text="0" buttonStyle="actionButton" />
        <NumberButton text="&#61;" buttonStyle="operatorButton" />
      </div>
    </div>
  );
};

export default App;

