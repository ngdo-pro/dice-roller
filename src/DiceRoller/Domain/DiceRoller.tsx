import { useState } from "react"

type Roll = {
  id: number,
  caracteristic: string,
  value: number,
}

const initialRollList: Roll[] = []
const caracteristics: string[] = ['str', 'dex', 'con', 'int', 'edu', 'cha', 'luc']

export function DiceRoller() {
  const [rollList, setRollList] = useState(initialRollList)
  const [selectedCaracteristic, setSelectedCaracteristic] = useState(caracteristics[0])

  function handleClick(e: React.MouseEvent) {
    e.preventDefault()

    let id = 0
    if (rollList.length > 0) {
      const lastRoll: Roll = rollList.slice(-1)[0]
      id = lastRoll.id + 1
    }
    const caracteristic = selectedCaracteristic
    const value = Math.floor(Math.random() * 100) + 1

    const roll = {id, caracteristic, value}

    setRollList([...rollList, roll])
  }

  function handleSelection(e: {target: {value: string}}) {
    setSelectedCaracteristic(e.target.value)
  }

  return (
    <div className="diceRoller">
      <h1>DiceRoller !</h1>
      <ul>{rollList.map((roll: Roll) => <li key={roll.id}>{roll.caracteristic}: {roll.value}</li>)}</ul>
      <form>
        <select value={selectedCaracteristic} onChange={handleSelection}>
          {caracteristics.map((caracteristic: string) => <option value={caracteristic} key={caracteristic}>{caracteristic}</option>)}
        </select>
        <button type="submit" onClick={handleClick}>Roll !</button>
      </form>
    </div>
  )
}