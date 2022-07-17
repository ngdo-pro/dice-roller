import { Roll, Characteristic } from "@DiceRoller"

let rollList: Roll[] = []

export function list(): Roll[] {
  return rollList
}

const NB_FACES = 100

export function roll(caracteristic: Characteristic): void {
  let id = 0
  if (rollList.length > 0) {
    const lastRoll: Roll = rollList.slice(-1)[0]
    id = lastRoll.id + 1
  }
  const value = Math.floor(Math.random() * NB_FACES) + 1

  const roll = {id, caracteristic, value}

  rollList = [...rollList, roll]
}