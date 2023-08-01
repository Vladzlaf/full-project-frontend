import { Link } from 'react-router-dom'
import React from 'react';

export interface MenuItem {
  id: number;
  name: string;
  path: string;
}

interface AnimationListProps {
  menuItems: MenuItem[];
}

export const AnimationSelect: React.FC<AnimationListProps> = ({ menuItems }) => {
  return (
    <label className="wrap__menu__label">
      <p>Сhoose your animation friend</p>
      <input type="checkbox" className="wrap__menu__checkbox1-inner"/>
      <ul className="wrap__menu__label-list">
        {menuItems.map((menuItem) => (
          <li key={menuItem.id}>
            <Link to={menuItem.path}>{menuItem.name}</Link>
          </li>
        ))}
      </ul>
    </label>
  )
}