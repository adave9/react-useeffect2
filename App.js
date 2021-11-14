
import { useEffect, useState } from 'react';
import './App.css';

function App() {
 const [count,setCount]=useState(0);
 const [calculation,setCalculation]=useState(0);
 useEffect( 
              ()=>{
                  setCalculation(()=>count*2);
              },[count]  // Add count here
          );

  return (
    <div className="App">
      <div className="wrap">
        <h2>Counter    : {count}</h2>
        <button type="button" onClick={()=> setCount(c=>c+1)}>X</button>
        &nbsp;&nbsp;2
        <h2>Calculation : {calculation}</h2>
      </div>
      <br/>
    </div>
  );
}

export default App;
