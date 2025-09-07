import React from 'react';

interface RowProps {
  item: { id: number; description: string };
  deleteTask: (id: number) => void;
}

export default function Row({ item, deleteTask }: RowProps) {
  return (
    <li>
      {item.description}
      <button className="delete-button" onClick={() => deleteTask(item.id)}>
        Delete
      </button>
    </li>
  );
}