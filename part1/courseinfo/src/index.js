import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Total from "./components/Total";
import Content from "./components/Content";

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
  const myParams = {
    part1: part1,
    part2: part2,
    part3: part3,
    exercises1: exercises1,
    exercises2: exercises2,
    exercises3: exercises3,
  };

  return (
    <div>
      {/* <h1>{course}</h1> */}
      <Header course={course} />
      <Content p={myParams} />
      {/* <Content part1={part1} exercises1={exercises1} /> */}
      {/* <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p> */}
      {/* <p>Number of exercises {exercises1 + exercises2 + exercises3}</p> */}
      {/* <Total ex1={exercises1} ex2={exercises2} ex3={exercises3} /> */}
      <Total ex={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
