import { useState } from 'react'

const FeedbackButton = ({ onClick, text }) => <button onClick={onClick}>{text}</button>


const Statistics = ({ good, neutral, bad }) => {
  let all = good + neutral + bad

  if (all > 0) {
    return (
      <div>
        <h1>Statistics</h1>
        good {good}<br />
        neutral {neutral}<br />
        bad {bad}<br />
        all {all}<br />
        average {(good - bad) / all}<br />
        positive {(good / all) * 100}%<br />
      </div>
    )
  } else {
    return (
      <div>
        <h1>Statistics</h1>
        No feedback given
      </div>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <FeedbackButton onClick={() => setGood(good + 1)} text="good" />
      <FeedbackButton onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <FeedbackButton onClick={() => setBad(bad + 1)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
