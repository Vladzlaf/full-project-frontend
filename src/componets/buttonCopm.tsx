import React from 'react';
import Button from '@mui/material/Button';

interface ButtonProps {
  onClick: () => void;
  label: string;
}

const ButtonComp: React.FC<ButtonProps> = ({ onClick, label}) => {
  return (
    <Button  onClick={onClick} variant={'intx-contained' as any}>
      {label}
    </Button>
    //   <Button  onClick={onClick} variant={'outlined' as any}>
    //   {label}
    // </Button>
  );
};

export default ButtonComp;