import React, { useState } from 'react';
import './App.css';
import CounterContext from './CounterContext';
import Parent from './Parent';

function App() {

  let countState = useState(1)

 // let [count, SetCount] = useState(50)
  return (
    <CounterContext.Provider value = {countState} >

      <div> 

        <Parent name="Maheen" />  
        </div>

    </CounterContext.Provider>
  );
}
export default App;