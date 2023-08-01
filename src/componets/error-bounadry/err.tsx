import ButtonComp from '../../componets/buttonCopm';
import {useEffect, useState} from 'react';

export const CreateError = () => {
  const [error, setError] = useState(false);

  const catchErr = () => {
    setError(true);
  }

  useEffect(() => {
    if (error) {
      throw new Error('shiiiiiiiiiiiit here we go again');
    }
  })
  return (
  <div className="wrap">
    <ButtonComp label='Click and you will see' onClick={catchErr} />
  </div>
  );
};
