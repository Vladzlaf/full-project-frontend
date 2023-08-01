import React, { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';

interface DropDownMenuProps<T extends string | number> {
    elements: T[]
  }
  const HoverMenu = <T extends string | number> ({ elements } : DropDownMenuProps<T>) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
      <div className="dropdown-button">
        <Button
          id="menu-button"
          aria-controls={open ? 'menu-button' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          variant={'intx-contained' as any}
        >
          Click!
        </Button>
        <Menu
          id="drop-down-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          {elements.map((element) => (
            <MenuItem className="intx-MuiMenuItem" key={element} onClick={handleClose}>{element}</MenuItem>
          ))}
        </Menu>
      </div>
    );
  };
  export default HoverMenu;