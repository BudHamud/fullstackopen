import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(6);
  const [neutral, setNeutral] = useState(2);
  const [bad, setBad] = useState(9);

  let total = good + neutral + bad;

  const getPositive = () => {
    if (good > neutral || good > bad) {
      return (good * (neutral + bad)) / 100;
    } else if (neutral > bad) {
      return (neutral * (good + bad)) / 100;
    } else {
      return (bad * (good + neutral)) / 100;
    }
  };

  const Statistics = () => {
    return (
      <div>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="average" value={total} />
        <StatisticLine text="positive" value={total + " %"} />
      </div>
    );
  };

  const StatisticLine = ({ text, value }) => {
    return (
      <table>
        <tr>
          <td>{ text }</td>
        </tr>
        <tr>
          <td>{ value }</td>
        </tr>
      </table>
    );
  };

  return (
    <div>
    <h3>Give feedback</h3>
    <button onClick={() => setGood( good + 1 )}>good</button>
    <button onClick={() => setNeutral( neutral + 1 )}>neutral</button>
    <button onClick={() => setBad( bad + 1 )}>bad</button>
    <Statistics />
    </div>
  )
};

export default App;
