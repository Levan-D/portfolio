/** @format */

import React from "react"

type Props<T> = {
  items: T[]
  columns: number
  staggered?: boolean
  renderItem: (item: T) => JSX.Element
}

export default function StaggeredGrid<T extends {}>({
  items,
  renderItem,
  columns,
  staggered = false,
}: Props<T>) {
  const partitionedArray: T[][] = Array.from({ length: columns }, () => [])

  items.forEach((item, index) => {
    const columnIndex = index % columns
    partitionedArray[columnIndex].push(item)
  })

  const filteredArray = partitionedArray.filter(column => column.length > 0)

  return (
    <div className="flex gap-8">
      {filteredArray.map((array: T[], i: number) => {
        const staggerRatio = (i % 2) + 5
        const randomNumber = Math.floor(Math.random() * 11)
        const margin = Math.round(staggerRatio * randomNumber)

        return (
          <div
            key={`array-${i}`}
            style={{ marginTop: staggered ? `${i % 2 === 0 ? "-" : ""}${margin}px` : "" }}
            className={` grow flex-col gap-8`}
          >
            {array.map((item: T, j: number) => (
              <div key={`item-${j}`} className=" ">
                {renderItem(item)}
              </div>
            ))}
          </div>
        )
      })}
    </div>
  )
}
