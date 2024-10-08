import './Css/Contact.css';
import { Link } from 'react-router-dom';
import { useForm } from '@formspree/react';

export default function Contact () {


  const [ state, handleSubmit ] = useForm( "mqkrvrdw" );

  if ( state.succeeded ) {
    return <div className='thankyou'>
      <h1>Thankyou !</h1>
      <Link to='/' aria-label="Go to homepage">
        <button>Click Here !</button>
      </Link>
    </div>;
  }

  return (
    <div className='contact'>
      <div className='contact-container'>
        <div className='contact-left'>
          <div className='contact-left-container'>
            <h1>Let's work together !</h1>
            <p>I develop and code beautifully simple things and i love what i do. Just simple like that!</p>
            <form className='form' onSubmit={ handleSubmit } action='/contact' method='POST'>
              <div className='personal-details'>
                <input
                  type="text"
                  placeholder='First name'
                  name='name'
                  id='first name'
                  required
                  autoComplete='off'

                />
                <input
                  type="text"
                  id='last name'
                  name='name'
                  placeholder='Last name'
                  required autoComplete='off'
                />
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder='Email address'
                  required autoComplete='off'
                />
                <input
                  type="number"
                  name='phone number'
                  id='phone number'
                  placeholder='Phone number'
                  required autoComplete='off'

                />
              </div>
              <div className='message'>
                <select name="messagefor" id="messagefor" >
                  <option value="">--Please choose an option--</option>
                  <option value="hireme">Hire me</option>
                  <option value="query">Query</option>
                  <option value="suggestion">Suggestion</option>
                </select>
                <textarea
                  id="message"
                  name="message"
                  placeholder='Message'
                ></textarea>
                <button
                  type='submit'
                  disabled={ state.submitting }
                >Send Message</button>
              </div>
            </form>
          </div>
        </div>
        <div className='contact-right'>
          <div className='connect-with-me'>
            <div className='connect-div'>
              <div className='contact-img'>
                <Link to='tel:+917876127982' aria-label="call">
                  <img src="./Icons/call.svg" alt="" />
                </Link>
              </div>
              <div>
                <p>Phone</p>
                <h3>+91 78761-27982</h3>
              </div>
            </div>
            <div className='connect-div'>
              <div className='contact-img'>
                <Link to='mailto:vipulsharma3001@gmail.com' aria-label="Mail to me">
                  <img src="./Icons/mail-2.svg" alt="" />
                </Link>
              </div>
              <div>
                <p>Email</p>
                <h3>vipulsharma3001@gmail.com</h3>
              </div>
            </div>
            <div className='connect-div'>
              <div className='contact-img'>
                <Link to='https://maps.app.goo.gl/6jrGawGqYzCWStPf8' aria-label="Go to my Place" target='_blank'>
                  <img src="./Icons/location.svg" alt="" />
                </Link>
              </div>
              <div>
                <p>Address</p>
                <h3>Village - Bhalowal, Tehsil - Nangal, District - Runagar, Punjab (140133)</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
