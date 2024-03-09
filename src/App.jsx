import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './countary'
import Counter from './countary'
import Users from './Users' 
import Friends from './Friends'
function App() {

    function handleClick(){
      alert('button clicked')
    }
 
    const hancleClick2=()=>{
      alert('button 2 clicked')
    }

    const addToFive=(num)=>{
      alert(num+5);
    }
    
  return (
    <>
      
      <h3>React core concepts</h3>

      <Friends></Friends>

      <Users></Users>
      <button onClick={handleClick} type="button">Click me</button>
      
      <button onClick={hancleClick2} type="button">Click me 2</button>
      {/* vejailla perameter pathanor somoi function cll hoye jaye  */}
      <button onClick={()=>{
      addToFive(3)}}>Four</button>

      <Counter></Counter>
    </>
  )
}

export default App
