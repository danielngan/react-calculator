import logo from './logo.svg';
import './App.css';
import React, { useRef, useState } from "react";


//var operator = 'no';
function App() {
    let[operator, setOperator] = useState('no');
    let [currentValue, setCurrentValue] = useState(0);
   let [inputValue, setInputValue] = useState(0);
   let [flag, setFlag] = useState(true);
   let [dot, setDot] = useState(false);
   //let number = function(x) {
       //current = x;
       //this.myInputRef.current.value = "drugsrbad"
   //}
    let onButtonClick = function(buttonValue) {
        if (flag == true) {
            setInputValue(buttonValue);
            setFlag(false);
        } else {
            setInputValue(inputValue * 10 + buttonValue)

        }
        /*setCurrentValue(currentValue * 10 + buttonValue)
        current = current * 10 + buttonValue;
        inputValue*/

    }

    let operate = function() {
        var newValue;
        if (operator === '-') {
            newValue = (currentValue - inputValue)
        } else if (operator === '+') {
            newValue = (currentValue + inputValue)
        } else if (operator === '*') {
            newValue = (currentValue * inputValue)
        } else if (operator === '/') {
            newValue = (currentValue / inputValue)
        } else {
            newValue = inputValue;
        }
        return newValue
    }

   let plus = function() {
       //var newValue;
        console.log("+ operator was '" + operator +"'")
       //operate()
       //console.log(currentValue)
       setCurrentValue(operate())
       setOperator('+');
       setFlag(true)
   }

   let minus = function() {
       //var newValue = 0;
       console.log("- operator was '" + operator +"'")
       //operate()
       //console.log(currentValue)
       setCurrentValue(operate())
       setOperator('-')
       setFlag(true)
   }

   let multiply = function() {
       //var newValue = 0;
       console.log("* operator was '" + operator +"'")
       //operate()
       //console.log(currentValue)
       setCurrentValue(operate())
       setOperator('*');
       setFlag(true)
   }

   let divide = function() {
       //var newValue = 0;
       console.log("/ operator was '" + operator +"'")
       //operate()
       //console.log(currentValue)
       setCurrentValue(operate())
       setOperator('/')
       setFlag(true)

   }

   let equal = function() {
        var finalValue;
       console.log("= operator was '" + operator +"'")
       console.log("= currentValue =" + currentValue + ", inputValue =" + inputValue)
       //var newValue = 0;
       //operate()
       //setCurrentValue(result);
       //console.log("newValue = " + newValue)
       setOperator('no')
       finalValue = operate()
       setInputValue(finalValue);
   }

   let clearAll = function() {
       setCurrentValue(0)
       setInputValue(0)
       operator = 'no'
       setFlag(true)
   }

   let clear = function() {
        setCurrentValue(Math.floor(inputValue/10));
        setInputValue(Math.floor(inputValue/10));
        if(currentValue < 10) {
            operator = 'no'
        }
   }


  return (
      <div>
          <input id="input" value = {inputValue} ></input><br/>
          <button  class = "buttons" onClick={(e) => onButtonClick(9)}>9</button>
          <button class = "buttons" id = "eight" onClick={(e) => onButtonClick(8)}>8</button>
          <button class = "buttons" onClick={(e) => onButtonClick(7)}>7</button>
          <button class = "buttons" onClick={(e) => clear()}>C</button>
          <button class = "buttons" onClick={(e) => clearAll()}>AC</button><br/>
          <button class = "buttons" onClick={(e) => onButtonClick(6)}>6</button>
          <button class = "buttons" onClick={(e) => onButtonClick(5)}>5</button>
          <button class = "buttons" onClick={(e) => onButtonClick(4)}>4</button>
          <button class = "buttons" onClick={(e) => multiply()}>*</button>
          <button class = "buttons" onClick={(e) => divide()}>/</button><br/>
          <button class = "buttons" onClick={(e) => onButtonClick(3)}>3</button>
          <button class = "buttons" onClick={(e) => onButtonClick(2)}>2</button>
          <button class = "buttons" onClick={(e) => onButtonClick(1)}>1</button>
          <button class = "buttons" onClick={(e) => plus()}>+</button>
          <button class = "buttons" onClick={(e) => minus()}>-</button><br/>
          <button class = "buttons" onClick={(e) => onButtonClick(0)}>0</button>
          <button class = "buttons" onClick={(e) => equal()}>=</button>
      </div>
  )


}

export default App;
