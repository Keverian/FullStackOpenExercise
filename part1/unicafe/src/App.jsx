import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

function PrintStat({text, counter}){
  return(
    <>
      <div>{text} {counter}</div>
    </>
  );
};
function HandleClick(){

}
function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  function HandleGoodButton(){
    setGood(good + 1);
  }

  function HandleBadButton(){
    setBad(bad + 1);
  }

  function HandleNeutralButton(){
    setNeutral(neutral + 1);
  }

  return (
    <>
      <h1>give feedback</h1>
      <Button handleClick={HandleGoodButton} text='good'/>
      <Button handleClick={HandleBadButton} text='neutral'/>
      <Button handleClick={HandleNeutralButton} text='bad'/>
      <h1>statistics</h1>
      <ul>
        <PrintStat text='good' counter={good}/>
        <PrintStat text='neutral' counter={neutral}/>
        <PrintStat text='bad' counter={bad}/>
      </ul>
    </>
  )
}

export default App
