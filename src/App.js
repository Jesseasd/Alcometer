import { useState } from 'react'
import './App.css'

function App() {
  const [weight, setWeight] = useState("")
  const [bottles, setBottles] = useState("")
  const [time, setTime] = useState("")
  const [gender, setGender] = useState("male")
  const [result, setResult] = useState(0)

  function calc(e) {
    e.preventDefault()

    let litres = bottles * 0.33
    let grams = litres * 8 * 4.5
    let burning = weight / 10
    let grams_left = grams - (burning * time)
    let result = 0

    if (gender === "male") {
      result = grams_left / (weight * 0.7)
    } else {
      result = grams_left / (weight * 0.6)
    }

    if (result < 0) {
      result = 0
    }

    setResult(result)
  }
  
  return (
    <div className="form-wrapper">
      <form onSubmit={calc}>
        
        <h1>Calculating alcohol blood level</h1>
        <input className="weight btn" value={weight} onChange={e => setWeight(e.target.value)} type="number" placeholder="Weight" />
        
        <div className="wrap">
          <select className="bottles btn" name="bottles" onChange={e => setBottles(e.target.value)}>
            <option value="Bottles" selected hidden>Bottles</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          
          <select className="time btn" name="time" onChange={e => setTime(e.target.value)}>
            <option value="time" selected hidden>Time</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <h3>Select gender</h3>
        
        <div className="wrap">
          <label className="btn">
            Male

            <input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)} />
          </label>
        
          <label className="btn">
            Female

            <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)} />
          </label>
        </div>

        <button>Calculate</button>
        <label className="output-txt">Your alcohol blood level is:</label>
        <output>{result.toFixed(2)}</output>
      </form>
    </div>
  )
}

export default App;
