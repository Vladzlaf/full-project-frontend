import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import AnimationCustom from '../componets/animations-stack/animation-custom'
import AnimationBuild from '../componets/animations-stack/animation-build'
import AnimationRequestFrame from '../componets/animations-stack/animation-request-frame'
import AnimationTimeout from '../componets/animations-stack/animation-timeout'
import HomePage from '../app/home-page'
import AnimationPage from '../app/animation/animations-page'

export const AppRouter = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {windowWidth > 899 && (
        <Route path="animation/*" element={<AnimationPage />} />
      )}
      {windowWidth <= 899 && (
        <>
          <Route path="animations/animation-custom" element={<AnimationCustom />} />
          <Route path="animations/animation-build" element={<AnimationBuild />}/>
          <Route path="animations/animation-request-frame" element={<AnimationRequestFrame />} />
          <Route path="animations/animation-timeout" element={<AnimationTimeout />} />
        </>
      )}
    </Routes>
  )
}