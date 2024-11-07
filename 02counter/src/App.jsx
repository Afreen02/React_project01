import './App.css'
import { useState } from 'react';
function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 15
  const addValue = () => {
    counter = counter + 1
    if(counter < 21){
      setCounter(counter)
    }
  }

   const removeValue = () => {
      console.log("clicked", counter);
      if(counter > 0){
        setCounter(counter - 1)
      }
   }
  return (
    <>
    <h1>Vite aur React</h1>
    <h2>Counter Value: {counter}</h2>
    <button onClick={addValue}>Add Value{counter}</button>
    <br/>
    <button onClick={removeValue}>Remove Value{counter}</button>
    <p>Footer: {counter}</p>
    </>
  )
}

export default App
