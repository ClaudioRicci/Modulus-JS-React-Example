import React, { Component } from "react";

const checkRemainder = number => {
  const multiplesOfThreeContainer = document.getElementById(
    "multiplesOfThreeContainer"
  );
  const multiplesOfFiveContainer = document.getElementById(
    "multiplesOfFiveContainer"
  );
  const multiplesOfThreeAndFiveContainer = document.getElementById(
    "multiplesOfThreeAndFiveContainer"
  );
  const otherNumbersContainer = document.getElementById(
    "otherNumbersContainer"
  );
  let multiplesOfThree = [];
  let multiplesOfFive = [];
  let multiplesOfThreeAndFive = [];
  let otherNumbers = [];

  for (number = 1; number < 100; number++) {
    if (number % 3 === 0 && number % 5 !== 0) {
      multiplesOfThree.push(number);
      multiplesOfThreeContainer.innerHTML = multiplesOfThree;
      console.log("Fizz");
    }
    if (number % 5 === 0 && number % 3 !== 0) {
      multiplesOfFive.push(number);
      multiplesOfFiveContainer.innerHTML = multiplesOfFive;
      console.log("Buzz");
    }
    if (number % 3 === 0 && number % 5 === 0) {
      multiplesOfThreeAndFive.push(number);
      multiplesOfThreeAndFiveContainer.innerHTML = multiplesOfThreeAndFive;
      console.log("FizzBuzz");
    }
    if (number % 5 !== 0 && number % 3 !== 0) {
      otherNumbers.push(number);
      otherNumbersContainer.innerHTML = otherNumbers;
      console.log(number);
    }
  }
};

class Remainder extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>
          Click button for numbers 1 to 100 grouped into lists divisible by 3,
          5, 3 and 5 and others.
        </h1>
        <button onClick={checkRemainder}>Click for lists</button>
        <h2>Multiples of Three: </h2>
        <p id="multiplesOfThreeContainer" />
        <h2>Multiples of Five: </h2>
        <p id="multiplesOfFiveContainer" />
        <h2>Multiples of Three And Five: </h2>
        <p id="multiplesOfThreeAndFiveContainer" />
        <h2>Other Numbers: </h2>
        <p id="otherNumbersContainer" />
        <h2>
          Please also open the console to see the appropriat 'Fizzbuzz'
          messaging per number
        </h2>
      </React.Fragment>
    );
  }
}

export default Remainder;
