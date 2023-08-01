import { Link } from 'react-router-dom'

export const Navbar = () => {

  return (
    <header className='main-header'>
      <ul className='wrap__navbar__menu'>
        <li className='navbar__menu--item'><Link to="/">Home</Link></li>
        <li className='navbar__menu--item'><Link to="/animation">Animations</Link></li>
      </ul>
    </header>
  )
}