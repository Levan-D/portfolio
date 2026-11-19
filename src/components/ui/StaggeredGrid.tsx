'use client';

import React from 'react';

type Props<T> = {
  items: T[];
  columns: number;
  staggered?: boolean;
  renderItem: (item: T) => React.JSX.Element;
};

export default function StaggeredGrid<T extends {}>({
  items,
  renderItem,
  columns,
  staggered = false,
}: Props<T>) {
  const partitionedArray: T[][] = Array.from({ length: columns }, () => []);

  items.forEach((item, index) => {
    const columnIndex = index % columns;
    partitionedArray[columnIndex].push(item);
  });

  const filteredArray = partitionedArray.filter((column) => column.length > 0);

  return (
    <div className="flex gap-8">
      {filteredArray.map((array: T[], i: number) => {
        const staggerRatio = (i % 2) + 5;
        // fixed "random-looking" 0–10 per column: same on server and client
        const offset = (i * 7 + 3) % 11;
        const margin = Math.round(staggerRatio * offset);

        return (
          <div
            key={`array-${i}`}
            style={{
              marginTop: staggered
                ? `${i % 2 === 0 ? '-' : ''}${margin}px`
                : '',
            }}
            className={`grow flex-col gap-8`}
          >
            {array.map((item: T, j: number) => (
              <div key={`item-${j}`} className=" ">
                {renderItem(item)}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
