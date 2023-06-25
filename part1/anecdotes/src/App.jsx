import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const points = [1, 4, 6, 3, 1, 1, 1, 1];
  

  const voteUp = () => {
    const copy = [...points];
    copy[selected] += 1;
  };

  const nextAnecdote = () => {
    if (selected >= anecdotes.length - 1) {
      setSelected(0)
    } else {
      setSelected(selected + 1)
    }
    mostVoted = getMostVoted()
  }

  const getMostVoted = () => {
    const maxPoints = Math.max(...points);
    const mostVotedIndex = points.findIndex((point) => point === maxPoints);
    return anecdotes[mostVotedIndex];
  };  

  let mostVoted = getMostVoted()

  const [selected, setSelected] = useState(0);

  return (
    <div>
      <h2>Anecdote of the day</h2>
      {anecdotes[selected]}
      {points[selected]}
      <button onClick={() => voteUp()}>vote</button>
      <button onClick={() => nextAnecdote()}>next anecdote</button>
      <h2>Anecdote most voted</h2>
      { mostVoted }
    </div>
  );
};

export default App;
