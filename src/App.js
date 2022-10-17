
import './App.css';

import { useCallback, useMemo, useState } from "react";
import Child from './Child';


export default function App() {
  const [counterone, setCounterOne] = useState(0);
  const [childNum, setChildNum] = useState(counterone)
  const incrementOne = () => {
    setCounterOne(counterone + 1);
  }
  const decrementOne = () => {
    setCounterOne(counterone - 1);
  }
  const changeChildnumber = useCallback(
    (number) => {

      setChildNum(number);
    }
    ,
    []
  )
 
  let [arr , setArr]  = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  let maxArr = useMemo(() => Math.max(...arr)
  , [arr]);
  let changeArr=()=>{
 
    setArr([99,100,499])
  }

  return (
    <div className="App">
      <button onClick={incrementOne}>+</button>
      <button onClick={decrementOne}>-</button>

      <span>{counterone}</span>
      <Child changeChildnumber={changeChildnumber} number={childNum} maxArr={maxArr}/>
      <button onClick={changeArr}>change ar</button>
    </div>
  );
}


//since props in js is an object so concept of referential equality comes here. if the referce is same no rerendering occurs , so to make the props of same referential
// equality we use useCallback, useMemo,
//useCallback memorizes a function
//useMemo memorizes a value

//so in the props if we pass function we need to use useCallback
//and if we pass down value we need to use useMemo
