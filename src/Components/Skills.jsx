import './Css/Skills.css';

const skillsArr = [
  { uid: 1, id: 'nextjs', name: 'Next Js', img: './Icons/next.svg' },
  { uid: 2, id: 'materialui', name: 'Material UI', img: './Icons/materialui.svg' },
  { uid: 3, id: 'react', name: 'React', img: './Icons/react.svg' },
  { uid: 4, id: 'postman', name: 'Postman', img: './Icons/postman.svg' },
  { uid: 5, id: 'redux', name: 'Redux', img: './Icons/redux.svg' },
  { uid: 6, id: 'tailwind', name: 'Tailwind', img: './Icons/tailwind.svg' },
  { uid: 7, id: 'git', name: 'Git & GitHub', img: './Icons/git.svg' },
  { uid: 8, id: 'mongodb', name: 'MongoDB', img: './Icons/mongodb.svg' },
  { uid: 9, id: 'express', name: 'Express Js', img: './Icons/express.svg' },
  { uid: 10, id: 'nodejs', name: 'Node Js', img: './Icons/node.svg' },
  { uid: 11, id: 'html', name: 'Html', img: './Icons/html.svg' },
  { uid: 12, id: 'css', name: 'Css', img: './Icons/css.svg' },
  { uid: 13, id: 'javascript', name: 'Javascript', img: './Icons/javascript.svg' },
  { uid: 14, id: 'mysql', name: 'My Sql', img: './Icons/mysql.svg' },
  { uid: 15, id: 'firebase', name: 'Firebase', img: './Icons/firebase.svg' }
];


export default function Skills () {
  return (
    <div className='skills'>
      <div className='skills-container'>
        <h1>My Skills & Tools</h1>
        <p>I put your ideas and thus your wishes in the form of a unique web project that inspires me and you.</p>
        <div className='skills-cards'>
          { skillsArr?.map( ( skill ) => {
            return <div className='skills-card' key={ skill.uid }>
              <div>
                <img{ ...( skill?.id ? { id: skill.id } : {} ) } src={ skill.img } alt="" />
              </div>
              { skill.name }
            </div>;
          } ) }
        </div>
      </div>
    </div>
  );
}
