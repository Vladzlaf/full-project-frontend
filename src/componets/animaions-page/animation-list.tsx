// animation-list.tsx
import React from 'react';
import { Link } from 'react-router-dom';

export interface MenuItem {
  id: number;
  name: string;
  path: string;
}

interface AnimationListProps {
  menuItems: MenuItem[];
}

export const AnimationList: React.FC<AnimationListProps> = ({ menuItems }) => {
  return (
    <ul className="wrap__menu--list">
      {menuItems.map((menuItem) => (
        <li key={menuItem.id}>
          <Link to={menuItem.path}>{menuItem.name}</Link>
        </li>
      ))}
    </ul>
  );
};