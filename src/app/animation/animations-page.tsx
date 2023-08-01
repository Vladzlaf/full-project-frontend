import { AnimationSelect } from '../../componets/animaions-page/animation-select'
import { AnimationRouter } from './animations-funcs/animations-router'
import { menuItemsDeckstop } from '../../componets/animaions-page/animation-data'

const AnimationPage = () => {
  return (
    <div className='wrap'>
      <h2>Animations</h2>
      <AnimationSelect menuItems={menuItemsDeckstop}  />
      <AnimationRouter />
    </div>
  )
}

export default AnimationPage
