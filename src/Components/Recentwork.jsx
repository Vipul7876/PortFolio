import { Link } from 'react-router-dom';
import Image1 from '/Images/project1.png';
import Image2 from '/Images/project2.png';
import Image3 from '/Images/project3.png';
import './Css/Recentwork.css';

export default function Recentwork () {
  return (
    <div className='recentwork'>
      <div className="recentwork-container">
        <h1>My Recent Works</h1>
        <div className='works'>
          <div className='work1'>
            <div className='left'>
              <img src={Image1} alt="porject1" />
              <Link to='https://shopp3000.netlify.app' target='_blank' aria-label="Go to shopping website">
                <div>Visit Site <span>&#8599;</span></div>
              </Link>
            </div>
            <div className='right'>
              <h3>Shopping</h3>
              <p><span>Technologies Used:</span> &nbsp; React, Tailwind CSS<br />
                <span>Description:</span> &nbsp; Developed a fully functional shopping website with a responsive design.<br />
                <span>Key Features:</span> &nbsp; Implemented a shopping cart with all basic functionalities. Developed a detailed product information page. Utilized React Context API for state management across the application. Designed a user-friendly interface with Tailwind CSS for a seamless shopping experience.
              </p>
            </div>
          </div>
          <div className='work2'>
            <div className='left'>
              <img src={ Image2 } alt="porject2" />
            </div>
            <div className='right'>
              <h3>NetflixGpt</h3>
              <p><span>Technologies Used:</span> &nbsp;  React, Tailwind , Redux, Firebase, Gemini<br />
                <span>Description:</span> &nbsp;  Developed a fully functional Movie Suggestion website with gpt integration.<br />
                <span>Key Features:</span> &nbsp; Utilized Redux for state management across the application.  Designed a user-friendly interface with Tailwind CSS for a seamless experience.  Used google Gemini for gpt integration to suggest movies.   Used google Firebase for user authentication in the  project.
              </p>
            </div>
          </div>
          <div className='work3'>
            <div className='left'>
              <img src={ Image3 } alt="porject3" />
              <Link to='https://blogg01.netlify.app/' target='_blank' aria-label="Go to bloging website">
                <div>Visit Site <span>&#8599;</span></div>
              </Link>
            </div>
            <div className='right'>
              <h3>Blogg</h3>
              <p><span>Technologies Used:</span> &nbsp; React, Tailwind , Redux, Node, Express, MongoDB<br />
                <span>Description:</span> &nbsp; Developed a fully functional MERN Blog website.<br />
                <span>Key Features:</span> &nbsp;  Utilized Redux for state management across the application.  Implemented basic CRUD operations for uses and Blogs can be seen or read by anyone.  Implemented backend with node, express and mongodb.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
