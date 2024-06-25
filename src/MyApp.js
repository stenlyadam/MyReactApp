import React, { useState, useEffect } from "react";
import Greetings from "./Greetings";
import Greeting2 from "./Greetings2";

const MyApp = () => {
  // let hello = "Hello World!!!";
  const [hello, setHello] = useState("Hello World!!!");
  const handleClick = () => {
    setHello("Selamat Datang");
    // hello = "Selamat Datang";
    // console.log(hello);
  };

  useEffect(() => {
    console.log("ini dijalan secara otomatis");
    //Calling API
  }, []);

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
