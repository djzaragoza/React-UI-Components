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
        
      </div>
    </div>
  )
}

