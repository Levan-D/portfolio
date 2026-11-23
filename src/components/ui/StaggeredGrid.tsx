'use client';

import React from 'react';

// every column starts at its own height, so neighbours and the outer pair both read as staggered
const STAGGER_OFFSETS = ['0px', '64px', '32px'];

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
        return (
          <div
            key={`array-${i}`}
            style={{
              marginTop: staggered
                ? STAGGER_OFFSETS[i % STAGGER_OFFSETS.length]
                : '',
            }}
            className="flex min-w-0 flex-1 flex-col gap-8"
          >
            {array.map((item: T, j: number) => (
              <div key={`item-${j}`}>{renderItem(item)}</div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
