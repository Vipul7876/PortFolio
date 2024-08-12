import Typewriter from 'typewriter-effect';
import './Css/Home.css';
import { Link, NavLink } from 'react-router-dom';


export default function Home () {

  return (
    <div className='home-container'>
      <div className='hire'>
        HIRE
      </div>
      <div className='home-left'>
        <div className="home-left-container">
          <h2>I am Vipul</h2>
          <h1><Typewriter
            options={ {
              strings: [ 'Web Developer', 'Front-End Developer','React Developer','Full Stack Developer' ],
              autoStart: true,
              loop: true,
              pauseFor: 500,
              delay: 100,
              deleteSpeed:150
            } }
          /></h1>
          <p>I make web pages come alive</p>
          <div className='home-left-btns'>
            <NavLink to='https://drive.google.com/file/d/1YTvVSWKdzX0j5nFDcQ3GZiulj0dU7xF2/view?usp=sharing' target='_blank'><button >Download CV <img src="./Icons/download.svg" alt="" /></button></NavLink>
            <ul>
              <li><Link to='https://www.linkedin.com/in/vipul-sharma-1a228323a' target='_blank' aria-label="Go to linkedin"><img src="./Icons/linkedin.svg" alt="" /></Link></li>
              <li><Link to='https://github.com/Vipul7876' target='_blank' aria-label="Go to Github"><img src="./Icons/github.svg" alt="" /></Link></li>
              <li><Link to='https://wa.me/7876127982' target='_blank' aria-label="Go to what's app"><img src="./Icons/whatsapp.svg" alt="" /></Link></li>
              <li><Link to='mailto:vipulsharma3001@gmail.com' aria-label="mail to me"><img src="./Icons/mail.svg" alt="" /></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
