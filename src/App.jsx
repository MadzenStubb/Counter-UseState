import "./App.css";
import Logo from "./Images/Logo.png";
import Button from "./Components/Button";
import Counter from "./Components/Counter";
import { useState } from "react";

const App = () => {

  const [numClicks, setNumClicks] = useState(0);

  const handleClick = () => {
    setNumClicks(numClicks + 15);
  }

  const resetCount = () => {
    setNumClicks(0);
  }

  return (
    <main className="App">
      <section className="logo-container">
        <img src={Logo} alt="Logo" className="logo-img" />
      </section>
      <section className="main-container">

        <Counter numClicks={numClicks}/>

        <Button
          text="Click"
          clickButton={true}
          handleOnClick={handleClick}
        />
        <Button
          text="Reset"
          clickButton={false}
          handleOnClick={resetCount}
        />
      </section>
    </main>
  );
};

export default App;
