// animation-list.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AnimationList, MenuItem } from './animation-list';

describe('AnimationList', () => {
  it('отображает элементы меню корректно для десктопной версии', () => {
    // Define mock menu items for desktop
    const menuItemsDeckstop: MenuItem[] = [
      { id: 1, name: 'Item 1', path: '/item-1' },
      { id: 2, name: 'Item 2', path: '/item-2' },
      { id: 3, name: 'Item 3', path: '/item-3' },
      { id: 4, name: 'Item 4', path: '/item-4' },
      // Add more items as needed
    ];

    // Render the component with mock data
    render(
      <BrowserRouter>
        <AnimationList menuItems={menuItemsDeckstop} /> {/* Pass menuItemsDeckstop as a prop */}
      </BrowserRouter>
    );

    // Assert that the correct number of menu items are rendered
    const menuItems = screen.getAllByRole('listitem');
    expect(menuItems).toHaveLength(menuItemsDeckstop.length);

    // Assert that each menu item contains the correct link text
    menuItems.forEach((menuItem, index) => {
      expect(menuItem).toHaveTextContent(menuItemsDeckstop[index].name);
    });
  });

  it('отображает элементы меню корректно для мобильной версии', () => {
    // Define mock menu items for mobile
    const menuItemsMobile: MenuItem[] = [
      { id: 1, name: 'Mobile Item 1', path: '/mobile-item-1' },
      { id: 2, name: 'Mobile Item 2', path: '/mobile-item-2' },
      { id: 3, name: 'Mobile Item 3', path: '/mobile-item-3' },
      { id: 4, name: 'Mobile Item 4', path: '/mobile-item-4' },
      // Add more items as needed
    ];

    // Render the component with mock data
    render(
      <BrowserRouter>
        <AnimationList menuItems={menuItemsMobile} /> {/* Pass menuItemsMobile as a prop */}
      </BrowserRouter>
    );

    // Assert that the correct number of menu items are rendered
    const menuItems = screen.getAllByRole('listitem');
    expect(menuItems).toHaveLength(menuItemsMobile.length);

    // Assert that each menu item contains the correct link text
    menuItems.forEach((menuItem, index) => {
      expect(menuItem).toHaveTextContent(menuItemsMobile[index].name);
    });
  });
});
