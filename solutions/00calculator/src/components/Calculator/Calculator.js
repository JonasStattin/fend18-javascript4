import React, { useState } from 'react';

const ADD = 'ADD';
const SUB = 'SUB';
const MULT = 'MULT';
const DIV = 'DIV';
const NONE = 'NONE';

let lastValue;
let enteredValue;
let useMethod = NONE;
let isCalced = false;
let hasNewInput = false;

export default () => {
  const [currentValue, setCurrentValue] = useState(0);

  const keypad = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

  function updateValue(val) {
    if (isCalced) {
      setCurrentValue(val);
      enteredValue = val;
      isCalced = false;
    } else {
      enteredValue = parseInt(currentValue + '' + val);
      setCurrentValue(enteredValue);
    }
    hasNewInput = true;
  }

  function updateMethod(val) {
    if (hasNewInput) {
      calc();
      useMethod = val;
    }
  }

  function calc() {
    let newValue = enteredValue

    if (lastValue) {
      switch(useMethod) {
        case ADD:
          newValue = lastValue +enteredValue;
          break;
        case SUB:
          newValue = lastValue - enteredValue;
          break;
        case MULT:
          newValue = lastValue * enteredValue;
          break;
        case DIV:
          newValue = lastValue / enteredValue;
          break;
        default:
          newValue = enteredValue;
          break;
      }
    }

    lastValue = newValue;
    setCurrentValue(newValue);
    isCalced = true;
    hasNewInput = false;
  }

  return (
    <>
      <div>{currentValue}</div>
      {keypad.map(key => <button key={key} onClick={() => updateValue(key)}>{key}</button>)}
      <button onClick={() => updateMethod(ADD)}>+</button>
      <button onClick={() => updateMethod(SUB)}>-</button>
      <button onClick={() => updateMethod(MULT)}>*</button>
      <button onClick={() => updateMethod(DIV)}>/</button>
      <button onClick={calc}>=</button>
    </>
  );
}
