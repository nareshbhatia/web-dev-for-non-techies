import * as React from 'react';
import './List.css';

export interface ListItem {
  id: string;
  name: string;
}

interface ListProps {
  items: Array<ListItem>;
  selectedItemId: string;
  onItemSelected: (itemId: string) => void;
}

export function List({ items, selectedItemId, onItemSelected }: ListProps) {
  return (
    <ul className="list">
      {items.map((item) => (
        <li
          key={item.id}
          className={`list__item
                ${item.id === selectedItemId ? 'list__item--selected' : ''}
              `}
          onClick={() => onItemSelected(item.id)}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
}
