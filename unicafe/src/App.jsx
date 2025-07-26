import {useState} from 'react'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const StatisticsLine = ({text, value}) => <p>{text}: {value}</p>

const Statistics = (props) => {

  const good = props.good
  const neutral = props.neutral
  const bad = props.bad

  const calculateAverage = (good, neutral, bad) => {
    return (Math.round(((good - bad) / (good + bad + neutral)) * 1000)) / 1000
  }

  const percentPositive = (good, neutral, bad) => {
    return (Math.round(((good / (good + neutral + bad)) * 100) * 1000)) / 1000
  }

  return (
    <div>
      <h1>Statistics</h1>

      <table>
        <tbody>
          <tr>
            <td>Good</td>
            <td>{good}</td>
          </tr>
          
          <tr>
            <td>Neutral</td>
            <td>{neutral}</td>
          </tr>

          <tr>
            <td>Bad</td>
            <td>{bad}</td>
          </tr>

          <tr>
            <td>Total Feedbacks</td>
            <td>{good + neutral + bad}</td>
          </tr>

          <tr>
            <td>Average</td>
            <td>{calculateAverage(good, neutral, bad)}</td>
          </tr>

          <tr>
            <td>Positive</td>
            <td>{percentPositive(good, neutral, bad)}</td>
          </tr>

      </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  if (good + neutral + bad > 0){
    return (
      <div>
        <h1>Give Feedback</h1>
        <Button onClick={handleGood} text='Good' />
        <Button onClick={handleNeutral} text='Neutral' />
        <Button onClick={handleBad} text='Bad' />
        <Statistics good={good} bad={bad} neutral={neutral} />
      </div>
      
    )
  }

  return(
    <div>
          <h1>Give Feedback</h1>
          <Button onClick={handleGood} text='Good' />
          <Button onClick={handleNeutral} text='Neutral' />
          <Button onClick={handleBad} text='Bad' />
          <h1>Statistics</h1>
          <p>No Feedback Given</p>
        </div>
  )
} 

export default App
