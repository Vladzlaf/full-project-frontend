import React from 'react';
import HoverMenu from '../componets/hover-menu';
import { CreateError } from '../componets/error-bounadry/err';
import AnimationStopButton from '../componets/animaions-page/animation-button';
import HomeLayout from './rickandmorty/charactor-select';

function Home() {
  return (
    <div className='wrap__container'>
      <div className='wrap__container--drops'>
        <HoverMenu elements={[1, 2, 3, 4]}/>
        <HoverMenu elements={['One', 'Two', 'Three', 'Four']}/>
        <HoverMenu elements={['Un', 'Deux', 'Trois', 'Quatre']}/>
        <HomeLayout></HomeLayout>
      </div>
        <CreateError/>
        <AnimationStopButton/>
    </div>
  );
}

export default Home;
