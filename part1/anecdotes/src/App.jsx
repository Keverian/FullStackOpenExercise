import { useState } from 'react'

function getRandomNum(max){
  return Math.floor(Math.random() * max);
}

function PrintVotes({voteNum}){
  return(
    <>
      <div>has {voteNum} votes</div>
    </>
  );
}

function PrintAnecdote({selected, anecdotes, voteArr}){
  return(
    <>
      {anecdotes[selected]}
      <PrintVotes voteNum={voteArr[selected]}/>
    </>
  );
}

const App = () => {
  
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [maxIndex, setMaxIndex] = useState(0); 
  const [selected, setSelected] = useState(0)
  const [voteArr, setVoteArr] = useState(Array.from({ length: anecdotes.length }, () => 0))
  
  function handleClick(){
    setSelected(getRandomNum(anecdotes.length));
  }
  function handleVote(){
    const copy = [...voteArr];
    copy[selected]++;
    if(copy[selected] > copy[maxIndex]){
      setMaxIndex(selected);
    }
    setVoteArr(copy);
  }
  return (
    <div>
      <h2>Anecdote of the day</h2>
      <PrintAnecdote selected={selected} anecdotes={anecdotes} voteArr={voteArr}/>
      
      <div>
        <button onClick={handleVote}>vote</button>
        <button onClick={handleClick}>next anecdotes</button>
      </div>
      <h2>Anecdote with most votes</h2>
      <PrintAnecdote selected={maxIndex} anecdotes={anecdotes} voteArr={voteArr}/>
      
    </div>
    
  )
}

export default App