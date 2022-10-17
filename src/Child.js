import React,{memo} from 'react'

function Child(props) {
    console.log("hello i am child of app "+props.number);
let changeNumber=()=>{
    props.changeChildnumber(Math.random());
}
  return (
    <div>
    child {props.number}
    <button onClick={changeNumber}>change child num</button>

    max arr {props.maxArr}
    </div>
  )
}

export default memo(Child);