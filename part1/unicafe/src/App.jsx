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
}

function CalcAvg(good, bad, total){
  return (good - bad)/total;
}

function calcPosPer(good, total){
  return (good/total) * 100 + " %";
}

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [avg, setAvg] = useState(0);
  const [posPer, setPosPer] = useState("0 %");
  
  function HandleGoodButton(){
    setAvg(CalcAvg(good + 1, bad, total + 1 ));
    setPosPer(calcPosPer(good + 1, total + 1));
    setGood(good + 1);
    setTotal(total + 1)
  }
  
  function HandleBadButton(){
    setPosPer(calcPosPer(good, total + 1));
    setAvg(CalcAvg(good, bad + 1, total + 1 ));
    setBad(bad + 1);
    setTotal(total + 1)
  }
  
  function HandleNeutralButton(){
    setPosPer(calcPosPer(good, total + 1));
    setAvg(CalcAvg(good, bad, total + 1 ));
    setNeutral(neutral + 1);
    setTotal(total + 1)
  }

  
  return (
    <>
      <h1>give feedback</h1>
      <Button handleClick={HandleGoodButton} text='good'/>
      <Button handleClick={HandleNeutralButton} text='neutral'/>
      <Button handleClick={HandleBadButton} text='bad'/>
      <h1>statistics</h1>
      <ul>
        <PrintStat text='good' counter={good}/>
        <PrintStat text='neutral' counter={neutral}/>
        <PrintStat text='bad' counter={bad}/>
        <PrintStat text='total' counter={total}/>
        <PrintStat text='avg' counter={avg}/>
        <PrintStat text='positive' counter={posPer}/>
      </ul>
    </>
  )
}

export default App
