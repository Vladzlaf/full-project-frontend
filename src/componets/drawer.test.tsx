import { fireEvent, screen } from '@testing-library/react'
import { render } from '@testing-library/react';

import Drawer from './drawer'
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

const setWindowWidth = (width: number) => {
  global.innerWidth = width
  global.dispatchEvent(new Event('resize'))
}

describe('AnimationMenu', () => {
  it('renders drawer button and open drawer when the screen width is less than 899', () => {
    setWindowWidth(800)

    const {getByTestId} = render(<BrowserRouter><Drawer /></BrowserRouter>)

    expect(getByTestId('drawer__button')).toBeInTheDocument()
    fireEvent.click(getByTestId('drawer__button'))
    expect(getByTestId('Drawer')).toBeInTheDocument()
  })

  it('close drawer when click outside of the drawer', () => {
    setWindowWidth(800)

    const { queryByTestId } = render(<BrowserRouter><Drawer /></BrowserRouter>)
    expect(screen.getByTestId('drawer__button')).toBeInTheDocument()
    fireEvent.click(screen.getByTestId('drawer__button'))
    expect(screen.getByTestId('Drawer')).toBeInTheDocument()
    fireEvent.mouseDown(document.body)
    expect(queryByTestId('Drawer')).not.toBeInTheDocument()
  })

  it('should not be drawer component if the width > 899', () => {
    setWindowWidth(900)

    const { queryByTestId } = render(<Drawer />)
    expect(queryByTestId('Drawer')).not.toBeInTheDocument()
  })
  
  it('should not be toggle btn if the width > 899', () => {
    setWindowWidth(900)

    const { queryByTestId } = render(<Drawer />)
    expect(queryByTestId('drawer__button')).not.toBeInTheDocument()
  })
})