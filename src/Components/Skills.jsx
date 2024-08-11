import './Css/Skills.css';

export default function Skills () {
  return (
    <div className='skills'>
      <div className='skills-container'>
        <h1>My Skills & Tools</h1>
        <p>I put your ideas and thus your wishes in the form of a unique web project that inspires me and you.</p>
        <div className='skills-cards'>
          <div className='skills-card'>
            <div>
              <img id='mongodb' src="./Icons/mongodb.svg" alt="" />
            </div>
            MongoDB
          </div>
          <div className='skills-card'>
            <div>
              <img id='express' src="./Icons/express.svg" alt="" />
            </div>
            Express Js
          </div>
          <div className='skills-card'>
            <div>
              <img src="./Icons/react.svg" alt="" />
              <p>65%</p>
            </div>
            React
          </div>
          <div className='skills-card'>
            <div>
              <img id='nodejs' src="./Icons/node.svg" alt="" />
              <p>40%</p>
            </div>
            Node Js 
          </div>
          <div className='skills-card'>
            <div>
              <img src="./Icons/redux.svg" alt="" />
            </div>
            Redux
          </div>
          <div className='skills-card'>
            <div>
              <img src="./Icons/html.svg" alt="" />
              <p>60%</p>
            </div>
            Html
          </div>
          <div className='skills-card'>
            <div>
              <img src="./Icons/css.svg" alt="" />
              <p>60%</p>
            </div>
            Css
          </div>
          <div className='skills-card'>
            <div>
              <img id='javascript' src="./Icons/javascript.svg" alt="" />
              <p>65%</p>
            </div>
            Javascript
          </div>
          <div className='skills-card'>
            <div>
              <img id='tailwind' src="./Icons/tailwind.svg" alt="" />
              <p>50%</p>
            </div>
            Tailwind
          </div>
          <div className='skills-card'>
            <div>
              <img src="./Icons/mysql.svg" alt="" />
            </div>
            My Sql
          </div>
          <div className='skills-card'>
            <div>
              <img src="./Icons/git.svg" alt="" />
            </div>
            Git & GitHub
          </div>
          <div className='skills-card'>
            <div>
              <img id='postman' src="./Icons/postman.svg" alt="" />
            </div>
            Postman
          </div>
          <div className='skills-card'>
            <div>
              <img id='firebase' src="./Icons/firebase.svg" alt="" />
            </div>
            Firebase
          </div>
        </div>
      </div>
    </div>
  );
}
