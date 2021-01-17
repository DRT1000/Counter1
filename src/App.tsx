import React, {useState} from "react";

import './App.css';
import Count from "./Count";
import Reset from "./Reset";
import Inc from "./Inc";


function App() {
  const maxValue = 5;
  const minValue = 0

  let [count, setCount] = useState(0)

  function incr() {
    let riseCount = count + 1
    riseCount >= maxValue ? setCount(maxValue) : setCount(riseCount)
  }
  function reset() {
    setCount(minValue)
  }

  return (
      <div className="App">
        <div>
          <Count count={count} maxValue={maxValue}/>
        </div>
        <div className="buttons">
          <Inc count={count} incr={incr} maxValue={maxValue}/>
          <Reset count={count} reset={reset} minValue={minValue}/>
        </div>
      </div>
  );
}

export default App;
