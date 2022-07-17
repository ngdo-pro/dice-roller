import { Characteristic } from "@DiceRoller";

export function list(): Characteristic[] {
  return [
    {
      label: 'Strength',
      value: 'STR',
    },
    {
      label: 'Dexterity',
      value: 'DEX',
    },
    {
      label: 'Constitution',
      value: 'CON',
    },
    {
      label: 'Intelligence',
      value: 'INT',
    },
    {
      label: 'Education',
      value: 'EDU',
    },
    {
      label: 'Perception',
      value: 'PER',
    },
    {
      label: 'Charisma',
      value: 'CHA',
    },
    {
      label: 'Luck',
      value: 'LUCK',
    },
  ]
}