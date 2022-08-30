import './style.scss'
import { Link } from 'react-router-dom'

const Register = () => {
  const submitRegis = (e) => { }
  return (
    <div className='register-section'>
      <h1 >Register</h1>
      <section className='contact-form'>
        <form onSubmit={submitRegis} >
          <ul>
            <li>
              <input
                placeholder="Name"
                type="text"
                name="name"
                required
              />
            </li>
            <li>
              <input
                placeholder="Email"
                type="email"
                name="email"
                required
              />
            </li>
            <li>
              <input placeholder="Password" type="password" name="password" required />
            </li>
            <li>
              <input type="submit" className="flat-button" value="Register" />
            </li>
          </ul>
        </form>
      </section>
      <p>Already have account? <Link to="/">Login</Link></p>
    </div>
  )
}

export default Register
