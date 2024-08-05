import { Link, NavLink } from 'react-router-dom';
import './Css/Recentwork.css';

export default function Recentwork () {
  return (
    <div className='recentwork'>
      <div className="recentwork-container">
        <h1>My Recent Works</h1>
        <div className='recentworks'>
          <div className='recentworks-left'>
            <img src="./Images/project1.png" alt="" />
            <Link to='https://shopp3000.netlify.app' target='_blank'>
              <div>Visit Site <span>&#8599;</span></div>
            </Link>
          </div>
          <div className='recentworks-right'>
            <img src="./Images/project2.png" alt="" />
            {/* <Link to='https://vipul-netflixgpt.netlify.app/' target='_blank'>
              <div>Visit Site <span>&#8599;</span></div>
            </Link> */}
          </div>
        </div>
        <div className='titles-container'>
          <div className='titles'><h2>Shopping Website</h2></div>
          <div className='titles'><h2>NetflixGpt</h2></div>
        </div>
      </div>
    </div>
  );
}
