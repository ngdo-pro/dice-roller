import { useState } from "react"
import { roll, RollList, CharacteristicList, Roll, Characteristic } from './index'

export function DiceRoller() {
  const characteristicList = CharacteristicList()
  const defaultCharacteristic = characteristicList[0]
  const [selectedCaracteristic, setSelectedCaracteristic] = useState<Characteristic>(defaultCharacteristic)
  const [rollList, setRollList] = useState<Array<Roll>>(RollList())

  function handleClick(e: React.MouseEvent) {
    e.preventDefault()

    roll(selectedCaracteristic)

    setRollList(RollList())
    setSelectedCaracteristic(defaultCharacteristic)
  }

  function handleSelection(e: {target: {value: string}}) {
    const selection = characteristicList.filter((characteristic: Characteristic) => {
      return characteristic.value === e.target.value
    })
    setSelectedCaracteristic(selection[0])
  }

  return (
    <div className="diceRoller">
      <h1>DiceRoller !</h1>
      <ul>{rollList.map((roll: Roll) => <li key={roll.id}>{roll.caracteristic.label}: {roll.value}</li>)}</ul>
      <form>
        <select value={selectedCaracteristic.value} onChange={handleSelection}>
          {characteristicList.map((caracteristic: Characteristic) => <option value={caracteristic.value} key={caracteristic.value}>{caracteristic.label}</option>)}
        </select>
        <button type="submit" onClick={handleClick}>Roll !</button>
      </form>
    </div>
  )
}