import { useState } from 'react'

const FeedbackButton = ({ onClick, text }) => {
  return <button onClick={onClick}>
    {text}
  </button>
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
      <h1>Statistics</h1>
      <div>
        good {good}
      </div>
      <div>
        neutral {neutral}
      </div>
      <div>
        bad {bad}
      </div>
    </div>
  )
}

export default App
