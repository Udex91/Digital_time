import React, { useState } from "react";


function App() {
  const[time, setTime] = useState(new Date().toLocaleTimeString());
 
  function timer(){
    setTime(new Date().toLocaleTimeString());
  }
  setInterval(timer, 1000);

return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={timer}>Local Time</button>
    </div>
  );
}

export default App;
