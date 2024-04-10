import React from 'react'
import Button from "./button"
import { FoodItem } from "../types"
import { IconAdd } from "./icons"

type ListViewProps = { children?: React.ReactNode }
type ListItemProps = { item: FoodItem, handleAdd: (item: FoodItem, quantity: number) => void }

function ListView({ children }: ListViewProps) {
  return (
    <section className="flex justify-center p-4">
      <ul className="flex-grow max-w-4xl p-6 bg-white rounded-2xl text-black">
        {children}
      </ul>
    </section>
  )
}

function ListItem({ item, handleAdd }: ListItemProps) {
  const [count, setCount] = React.useState(1)

  return <li className="border-b flex justify-between pb-4">
    <div className="flex flex-col">
      <p className="text-xl font-bold">{item.title}</p>
      <p className="italic">{item.description}</p>
      <p className="font-bold text-red-800">${item.price}</p>
    </div>
    <div className="flex flex-col gap-4 items-end">
      <div className="flex gap-2 items-center">
        <p className="text-lg font-semibold">Amount</p>
        <input
          type='number'
          className="bg-transparent border border-slate-400 rounded-lg w-16 px-2 py-1"
          value={count} onChange={e => {
            const newVal = parseInt(e.target.value)
            setCount(newVal)
          }} />
      </div>
      <Button disabled={count < 1} onClick={() => handleAdd(item, count)}>
        <IconAdd className="fill-white w-4 h-4" /> Add
      </Button>
    </div>
  </li>
}

const SectionList = {
  List: ListView,
  Item: ListItem
}

export default SectionList
