import logo from './logo.svg';
import './App.css';
import React, { useRef, useState } from "react";

var power = -1


//var operator = 'no';
function App() {
    let[operator, setOperator] = useState('no');
    let [currentValue, setCurrentValue] = useState(0);
   let [inputValue, setInputValue] = useState("0");
   let [flag, setFlag] = useState(true);
   let [dot, setDot] = useState(false);
   //var power = -1
   //let number = function(x) {
       //current = x;
       //this.myInputRef.current.value = "drugsrbad"
   //}
    let onButtonClick = function(buttonValue) {
        if (flag == true) {
            setInputValue(buttonValue.toString());
            setFlag(false);
        } else {
            if (dot === false) {
                setInputValue((inputValue * 10 + buttonValue).toString())
            } else if (dot === true){
                //var power = -1;
                var dotNumber =  Number(inputValue) + Math.pow(10, power) * buttonValue
                let n = dotNumber.toFixed(Math.abs(power));
                setInputValue(n)
                power = power-1;
                //let n =
            }
            //setInputValue((inputValue * 10 + buttonValue).toString())

        }
        /*setCurrentValue(currentValue * 10 + buttonValue)
        current = current * 10 + buttonValue;
        inputValue*/

    }

    let operate = function() {
        var newValue;
        if (operator === '-') {
            newValue = (currentValue - Number(inputValue))
        } else if (operator === '+') {
            newValue = (currentValue + Number(inputValue))
        } else if (operator === '*') {
            newValue = (currentValue * Number(inputValue))
        } else if (operator === '/') {
            newValue = (currentValue / Number(inputValue))
        } else {
            newValue = Number(inputValue);
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
       power = -1;
   }

   let minus = function() {
       //var newValue = 0;
       console.log("- operator was '" + operator +"'")
       //operate()
       //console.log(currentValue)
       setCurrentValue(operate())
       setOperator('-')
       setFlag(true)
       power = -1;
   }

   let multiply = function() {
       //var newValue = 0;
       console.log("* operator was '" + operator +"'")
       //operate()
       //console.log(currentValue)
       setCurrentValue(operate())
       setOperator('*');
       setFlag(true)
       power = -1
   }

   let divide = function() {
       //var newValue = 0;
       console.log("/ operator was '" + operator +"'")
       //operate()
       //console.log(currentValue)
       setCurrentValue(operate())
       setOperator('/')
       setFlag(true)
       power = -1

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
       setInputValue(finalValue.toString());
   }

   let clearAll = function() {
       setCurrentValue(0)
       setInputValue("0")
       operator = 'no'
       setFlag(true)
       setDot(false)
       power = -1;
   }

   let clear = function() {
        //setCurrentValue(Number(Math.floor(inputValue/10)));
        var lessOneDigit = inputValue.substring(0, inputValue.length-1);
        setInputValue(lessOneDigit)
        setCurrentValue(Number(lessOneDigit));
        if(currentValue < 10) {
            operator = 'no'
            setDot(false);
            power = -1
        }
   }

   let dotted = function() {
        if (dot === false) {
            setDot(true);
            setInputValue(inputValue + ".");
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
          <button class = "buttons" onClick={(e) => dotted()}>.</button>
          <button class = "buttons" onClick={(e) => equal()}>=</button>
      </div>
  )


}

export default App;
