"use client";

import { GridList, GridListItem } from "react-aria-components";

interface ListProps {
  items: string[];
}

export const List = ({ items }: ListProps) => {
  return (
    <GridList className='overflow-auto h-200'>
      {items.map((item, index) => (
        <GridListItem key={index}><div>{`Nr ${index + 1}`} {item}</div></GridListItem>
      ))}
    </GridList>
  );
};
