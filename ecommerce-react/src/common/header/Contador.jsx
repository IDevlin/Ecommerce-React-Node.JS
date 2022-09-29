import React, {useState} from 'react'

function Contador() {
    const [count, setCount]= useState(10)
  return (
    <>you clicked {count}  
    
    <button onClick={()=> setCount(count + 1)}>+</button>
    <button onClick={()=> setCount(count + -1)}>-</button>
    </>
    
  )
}

export default Contador