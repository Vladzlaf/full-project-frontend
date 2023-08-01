import { menuItemsMobile } from './animaions-page/animation-data'
import {AnimationList} from './animaions-page/animation-list'
import { useState, useEffect, useRef } from 'react'

export const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const drawerRef = useRef<HTMLDivElement>(null)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      drawerRef.current &&
      !drawerRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="wrap">
      <div className='container__drawer__button'>
        {windowWidth <= 899 && (
          <button className='drawer__button' onClick={handleToggle} data-testid="drawer__button">Открыть меню</button>
        )}
      </div>

      {isOpen && (
        <div ref={drawerRef} data-testid="Drawer" className={`drawer ${isOpen ? 'open' : ''}`}>
          <AnimationList menuItems={menuItemsMobile} />
        </div>
      )}
    </div>
  )
}

export default Drawer
