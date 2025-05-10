"use client";

import { GridList, GridListItem } from "react-aria-components";

export interface Partecipant {
  id: string;
  fullName: string;
}

interface ListProps {
  items: Partecipant[];
}

export const List = ({ items }: ListProps) => {
  return (
    <GridList className="overflow-auto h-200">
      {items.map((item, index) => (
        <GridListItem key={index}>
          <div>
            {`Nr ${index + 1}`} {item.fullName}
          </div>
        </GridListItem>
      ))}
    </GridList>
  );
};
