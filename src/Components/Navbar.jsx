import { Link, NavLink } from 'react-router-dom';
import './Css/Navbar.css';
import { useState } from 'react';

export default function Navbar () {

  const [ showhamburger, setShowhamburger ] = useState( false );

  return (
    <div className='navbar-container'>
      <p><Link to='/'>V</Link></p>
      <div
        className={showhamburger ? 'hamburger-menu':'navbar-menu'}
      >
        <ul>
          <li onClick={()=>setShowhamburger(false)}>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li onClick={()=>setShowhamburger(false)}>
            <NavLink to='/recentwork'>Work</NavLink>
          </li>
          <li onClick={()=>setShowhamburger(false)}>
            <NavLink to='/resume'>Resume</NavLink>
          </li>
          <li onClick={()=>setShowhamburger(false)}>
            <NavLink to='/skills'>Skills</NavLink>
          </li>
        </ul>
        <Link to='/contact'><button onClick={ () => setShowhamburger( false ) }>Hire me!</button></Link>
      </div>
      <button
        className='hambuger'
        onClick={()=>setShowhamburger(!showhamburger) }>
        <img src="./Icons/hamburger.svg" alt="" />
      </button>
    </div>
  );
}
