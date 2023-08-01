import AnimationBuild from '../../../componets/animations-stack/animation-build'
import AnimationCustom from '../../../componets/animations-stack/animation-custom'
import AnimationRequestFrame from '../../../componets/animations-stack/animation-request-frame'
import AnimationTimeout from '../../../componets/animations-stack/animation-timeout'
import { Route, Routes } from 'react-router-dom'

export const AnimationRouter = () => {
  return (
    <Routes>
      <Route path="animations/animation-custom" element={<AnimationCustom />} />
      <Route path="animations/animation-build" element={<AnimationBuild />}/>
      <Route path="animations/animation-request-frame" element={<AnimationRequestFrame />} />
      <Route path="animations/animation-timeout" element={<AnimationTimeout />} />
    </Routes>
  )
}
