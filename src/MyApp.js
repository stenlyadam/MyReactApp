import React from "react";
import Greetings from "./Greetings";
import Greeting2 from "./Greetings2";

const MyApp = () => {
  const hello = "Hello World!!!";
  const handleClick = () => {
    console.log("Button clicked");
  };
  return (
    //JSX
    //Komentar diluar JSX
    <>
      {/* Komentar dalam JSX */}
      <h2>{hello}</h2>
      <h3>Test</h3>
      <Greetings text="Text ini dari props" number={100} />
      <Greeting2 />
      <button onClick={handleClick}>Click Me</button>
    </>
  );
};

export default MyApp;
